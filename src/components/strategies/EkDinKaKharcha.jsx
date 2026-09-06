"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/lib/store/useAppStore";
import { Wallet, RotateCcw, TrendingDown, PiggyBank, Trophy, AlertTriangle, Clock, ChevronRight } from "lucide-react";

// ─── Time slots data ─────────────────────────────────────────
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const SLOTS = [{
  id: 1,
  time: "8 AM",
  label: "Morning Chai",
  prompt: "Rahul woke up, eyes still full of sleep. Where's the chai?",
  choices: [{
    label: "Chai tapri",
    emoji: "☕",
    cost: 15,
    category: "chai",
    wisdom: "Tapri chai = nostalgia + budget-friendly!"
  }, {
    label: "Starbucks",
    emoji: "🥤",
    cost: 350,
    category: "chai",
    wisdom: "₹350 chai? That's 70% of the day's budget gone, bro!"
  }, {
    label: "Home chai",
    emoji: "🏠",
    cost: 0,
    category: "skip",
    wisdom: "Smart! Mom's chai is always the best."
  }]
}, {
  id: 2,
  time: "9 AM",
  label: "Breakfast",
  prompt: "The stomach needs something. What's for breakfast?",
  choices: [{
    label: "Mess",
    emoji: "🍳",
    cost: 40,
    category: "food",
    wisdom: "Standard breakfast — cheap and filling."
  }, {
    label: "Swiggy",
    emoji: "🛵",
    cost: 180,
    category: "food",
    wisdom: "₹180 for pizza + delivery + taxes."
  }, {
    label: "Skip",
    emoji: "😴",
    cost: 0,
    category: "skip",
    wisdom: "Skip = hunger will hit back at 1 PM!"
  }]
}, {
  id: 3,
  time: "1 PM",
  label: "Lunch Time",
  prompt: "Time to feast — lunch break! What are you eating?",
  choices: [{
    label: "Canteen",
    emoji: "🍱",
    cost: 50,
    category: "food",
    wisdom: "Thali — veggies + dal + roti, perfect."
  }, {
    label: "Zomato",
    emoji: "📱",
    cost: 220,
    category: "food",
    wisdom: "₹220 biryani — hunger gone, wallet not so much."
  }, {
    label: "Tiffin",
    emoji: "🥡",
    cost: 30,
    category: "food",
    wisdom: "Home tiffin = best value for money."
  }]
}, {
  id: 4,
  time: "4 PM",
  label: "Snacks",
  prompt: "Need something crunchy with the evening chai.",
  choices: [{
    label: "Samosa",
    emoji: "🥟",
    cost: 20,
    category: "food",
    wisdom: "With chai — classic combo."
  }, {
    label: "Cafe",
    emoji: "🥐",
    cost: 150,
    category: "food",
    wisdom: "₹150 pastry + coffee. Fancy but expensive!"
  }, {
    label: "Nothing",
    emoji: "🚫",
    cost: 0,
    category: "skip",
    wisdom: "Self-control = wealth is built this way."
  }]
}, {
  id: 5,
  time: "6 PM",
  label: "Evening Plan",
  prompt: "Work is done. How to relax?",
  choices: [{
    label: "Walk",
    emoji: "🚶",
    cost: 0,
    category: "skip",
    wisdom: "Free + healthy. Win-win!"
  }, {
    label: "Movie",
    emoji: "🎬",
    cost: 300,
    category: "entertainment",
    wisdom: "₹300 ticket = ₹700 total (popcorn!)"
  }, {
    label: "Gaming cafe",
    emoji: "🎮",
    cost: 100,
    category: "entertainment",
    wisdom: "₹100/hour BGMI — friends + fun."
  }]
}, {
  id: 6,
  time: "8 PM",
  label: "Dinner",
  prompt: "Last meal of the day — something special or simple?",
  choices: [{
    label: "Mess",
    emoji: "🍛",
    cost: 60,
    category: "food",
    wisdom: "Reliable, affordable, fills you up."
  }, {
    label: "Restaurant",
    emoji: "🍽️",
    cost: 350,
    category: "food",
    wisdom: "₹350 dinner — made the day special!"
  }, {
    label: "Maggi",
    emoji: "🍜",
    cost: 15,
    category: "food",
    wisdom: "2-minute meal — hunger gone, money saved."
  }]
}, {
  id: 7,
  time: "10 PM",
  label: "Night Cravings",
  prompt: "Can't sleep. Need something?",
  choices: [{
    label: "Sleep",
    emoji: "😴",
    cost: 0,
    category: "skip",
    wisdom: "Best decision — tomorrow's a new day!"
  }, {
    label: "Ice cream",
    emoji: "🍨",
    cost: 120,
    category: "food",
    wisdom: "₹120 Cornetto — sweet ending."
  }, {
    label: "Online order",
    emoji: "🛍️",
    cost: 200,
    category: "food",
    wisdom: "₹200 for fries + coke — late night craving!"
  }]
}, {
  id: 8,
  time: "11 PM",
  label: "Late Night",
  prompt: "Final decision — what will Rahul do?",
  choices: [{
    label: "Bed",
    emoji: "🛏️",
    cost: 0,
    category: "skip",
    wisdom: "Smart — need to wake up early tomorrow."
  }, {
    label: "Midnight snack",
    emoji: "🍕",
    cost: 80,
    category: "food",
    wisdom: "₹80 pizza slice — last splurge."
  }]
}];
const STARTING_BALANCE = 500;
const CATEGORY_LABELS = {
  chai: {
    label: "Chai / Drinks",
    color: "#F59E0B",
    emoji: "☕"
  },
  food: {
    label: "Food",
    color: "#10B981",
    emoji: "🍴"
  },
  entertainment: {
    label: "Entertainment",
    color: "#8B5CF6",
    emoji: "🎉"
  },
  skip: {
    label: "Skipped (Saved)",
    color: "#3B82F6",
    emoji: "✨"
  }
};
export default function EkDinKaKharcha() {
  const [currentSlot, setCurrentSlot] = useState(0);
  const [choices, setChoices] = useState(Array(SLOTS.length).fill(null));
  const [gameOver, setGameOver] = useState(null);
  const {
    addCoins,
    coins
  } = useAppStore();
  const balance = useMemo(() => {
    const spent = choices.reduce((sum, c) => c ? sum + c.cost : 0, 0);
    return STARTING_BALANCE - spent;
  }, [choices]);
  const totalSpent = STARTING_BALANCE - balance;
  const totalSaved = balance;

  // Category breakdown
  const categoryBreakdown = useMemo(() => {
    const breakdown = {};
    choices.forEach(c => {
      if (c) {
        breakdown[c.category] = (breakdown[c.category] || 0) + c.cost;
      }
    });
    return breakdown;
  }, [choices]);
  const handleChoice = choice => {
    if (gameOver) return;
    const newBalance = balance - choice.cost;
    const newChoices = [...choices];
    newChoices[currentSlot] = choice;
    setChoices(newChoices);
    if (newBalance < 0) {
      setGameOver("broke");
      return;
    }
    if (currentSlot === SLOTS.length - 1) {
      setGameOver("win");
      if (newBalance >= 200) addCoins(30);else if (newBalance >= 100) addCoins(20);else addCoins(10);
    } else {
      setTimeout(() => setCurrentSlot(s => s + 1), 350);
    }
  };
  const reset = () => {
    setChoices(Array(SLOTS.length).fill(null));
    setCurrentSlot(0);
    setGameOver(null);
  };
  const slot = SLOTS[currentSlot];
  const progressPercent = (currentSlot + (gameOver ? 1 : 0)) / SLOTS.length * 100;
  return /*#__PURE__*/_jsxs("div", {
    className: "relative flex flex-col w-full max-w-4xl mx-auto px-3 sm:px-5 py-6 gap-5",
    children: [/*#__PURE__*/_jsxs(motion.div, {
      initial: {
        opacity: 0,
        y: -10
      },
      animate: {
        opacity: 1,
        y: 0
      },
      className: "text-center",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-2",
        children: [/*#__PURE__*/_jsx(Clock, {
          size: 14,
          className: "text-purple-400"
        }), /*#__PURE__*/_jsx("span", {
          className: "text-[11px] font-semibold text-zinc-300 tracking-wide uppercase",
          children: "Strategy 10 \xB7 Daily Simulator"
        })]
      }), /*#__PURE__*/_jsx("h2", {
        className: "text-2xl sm:text-3xl font-bold font-display text-gradient-emerald mb-1",
        children: "One Day's Spending \uD83D\uDED2"
      }), /*#__PURE__*/_jsx("p", {
        className: "text-sm text-zinc-400 font-medium",
        children: "Manage Rahul's daily expenses \u2014 run the whole day on ₹500!"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "glass-card rounded-2xl p-4 sm:p-5",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "flex items-center justify-between mb-3",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center",
            children: /*#__PURE__*/_jsx(Wallet, {
              size: 18,
              className: "text-amber-400"
            })
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("p", {
              className: "text-[10px] uppercase tracking-wider text-zinc-500 font-bold",
              children: "Rahul's Wallet"
            }), /*#__PURE__*/_jsxs(motion.p, {
              initial: {
                scale: 1.2,
                color: "#10B981"
              },
              animate: {
                scale: 1,
                color: balance < 50 ? "#EF4444" : "#F59E0B"
              },
              className: "text-xl font-bold number-highlight",
              children: ["\u20B9", Math.max(0, balance)]
            }, balance)]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "text-right",
          children: [/*#__PURE__*/_jsx("p", {
            className: "text-[10px] uppercase tracking-wider text-zinc-500 font-bold",
            children: "Total Spent"
          }), /*#__PURE__*/_jsxs("p", {
            className: "text-lg font-bold text-red-400",
            children: ["\u20B9", totalSpent]
          })]
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "flex items-center gap-1.5 mb-2",
        children: SLOTS.map((s, i) => {
          const done = i < currentSlot || gameOver;
          const active = i === currentSlot && !gameOver;
          return /*#__PURE__*/_jsxs("div", {
            className: "flex-1 flex flex-col items-center gap-1",
            children: [/*#__PURE__*/_jsx("div", {
              className: `h-2 w-full rounded-full transition-all ${done ? "bg-emerald-500" : active ? "bg-emerald-500/50 animate-pulse" : "bg-white/8"}`
            }), /*#__PURE__*/_jsx("span", {
              className: `text-[9px] font-bold ${done ? "text-emerald-400" : active ? "text-emerald-300" : "text-zinc-600"}`,
              children: s.time
            })]
          }, s.id);
        })
      })]
    }), /*#__PURE__*/_jsx(AnimatePresence, {
      children: gameOver && /*#__PURE__*/_jsxs(motion.div, {
        initial: {
          opacity: 0,
          scale: 0.9
        },
        animate: {
          opacity: 1,
          scale: 1
        },
        exit: {
          opacity: 0,
          scale: 0.9
        },
        className: "glass-card-premium rounded-2xl p-6 text-center",
        children: [gameOver === "broke" ? /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx(AlertTriangle, {
            className: "w-12 h-12 mx-auto mb-3 text-red-400"
          }), /*#__PURE__*/_jsx("h3", {
            className: "text-xl font-bold font-display text-red-400 mb-1",
            children: "Game Over \u2014 Rahul went broke! \uD83D\uDE05"
          }), /*#__PURE__*/_jsxs("p", {
            className: "text-sm text-zinc-300",
            children: ["Ran out of money at Slot ", currentSlot + 1, "! Budget planning is essential, bro."]
          })]
        }) : /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx(Trophy, {
            className: "w-12 h-12 mx-auto mb-3 text-amber-400"
          }), /*#__PURE__*/_jsx("h3", {
            className: "text-xl font-bold font-display text-gradient-gold mb-1",
            children: "Smart Spender! \uD83C\uDF89"
          }), /*#__PURE__*/_jsxs("p", {
            className: "text-sm text-zinc-300",
            children: ["Rahul saved ", /*#__PURE__*/_jsxs("span", {
              className: "text-emerald-400 font-bold",
              children: ["\u20B9", totalSaved]
            }), "!", /*#__PURE__*/_jsxs("span", {
              className: "text-amber-400 font-bold",
              children: [" +", totalSaved >= 200 ? 30 : totalSaved >= 100 ? 20 : 10, " coins"]
            }), " reward!"]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "grid grid-cols-2 gap-2 mt-4 mb-4",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "glass rounded-xl p-3",
            children: [/*#__PURE__*/_jsx(TrendingDown, {
              size: 16,
              className: "mx-auto text-red-400 mb-1"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-[10px] text-zinc-500 uppercase font-bold",
              children: "Total Spent"
            }), /*#__PURE__*/_jsxs("p", {
              className: "text-lg font-bold text-red-400",
              children: ["\u20B9", totalSpent]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "glass rounded-xl p-3",
            children: [/*#__PURE__*/_jsx(PiggyBank, {
              size: 16,
              className: "mx-auto text-emerald-400 mb-1"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-[10px] text-zinc-500 uppercase font-bold",
              children: "Total Saved"
            }), /*#__PURE__*/_jsxs("p", {
              className: "text-lg font-bold text-emerald-400",
              children: ["\u20B9", totalSaved]
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "text-left mb-4",
          children: [/*#__PURE__*/_jsx("p", {
            className: "text-xs font-bold text-zinc-400 uppercase mb-2",
            children: "Spending Breakdown"
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-1.5 max-h-40 overflow-y-auto custom-scroll pr-1",
            children: [Object.entries(categoryBreakdown).map(([cat, amt]) => {
              const cfg = CATEGORY_LABELS[cat];
              return /*#__PURE__*/_jsxs("div", {
                className: "flex items-center justify-between text-xs px-3 py-2 rounded-lg glass",
                children: [/*#__PURE__*/_jsxs("span", {
                  className: "flex items-center gap-1.5",
                  children: [/*#__PURE__*/_jsx("span", {
                    children: cfg.emoji
                  }), /*#__PURE__*/_jsx("span", {
                    className: "text-zinc-300 font-medium",
                    children: cfg.label
                  })]
                }), /*#__PURE__*/_jsxs("span", {
                  className: "font-bold",
                  style: {
                    color: cfg.color
                  },
                  children: ["\u20B9", amt]
                })]
              }, cat);
            }), Object.keys(categoryBreakdown).length === 0 && /*#__PURE__*/_jsx("p", {
              className: "text-xs text-zinc-500 text-center py-2",
              children: "No spending at all! Come on, try again."
            })]
          })]
        }), /*#__PURE__*/_jsxs("button", {
          onClick: reset,
          className: "btn-emerald rounded-xl px-5 py-2.5 text-sm font-bold inline-flex items-center gap-2",
          children: [/*#__PURE__*/_jsx(RotateCcw, {
            size: 14
          }), " Try Again"]
        })]
      })
    }), !gameOver && slot && /*#__PURE__*/_jsx(AnimatePresence, {
      mode: "wait",
      children: /*#__PURE__*/_jsxs(motion.div, {
        initial: {
          opacity: 0,
          x: 40
        },
        animate: {
          opacity: 1,
          x: 0
        },
        exit: {
          opacity: 0,
          x: -40
        },
        transition: {
          duration: 0.3
        },
        className: "glass-card rounded-2xl p-5 sm:p-6",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-between mb-1",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-2",
            children: [/*#__PURE__*/_jsxs("span", {
              className: "text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full",
              children: ["Slot ", currentSlot + 1, " / ", SLOTS.length]
            }), /*#__PURE__*/_jsx("span", {
              className: "text-xs text-zinc-500 font-medium",
              children: slot.time
            })]
          }), /*#__PURE__*/_jsxs("span", {
            className: "text-xs text-zinc-500",
            children: ["Balance: ", /*#__PURE__*/_jsxs("span", {
              className: "font-bold text-amber-400",
              children: ["\u20B9", balance]
            })]
          })]
        }), /*#__PURE__*/_jsx("h3", {
          className: "text-lg sm:text-xl font-bold font-display text-white mb-1",
          children: slot.label
        }), /*#__PURE__*/_jsx("p", {
          className: "text-sm text-zinc-400 mb-4",
          children: slot.prompt
        }), /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
          children: slot.choices.map((choice, idx) => {
            const canAfford = balance >= choice.cost;
            return /*#__PURE__*/_jsxs(motion.button, {
              onClick: () => handleChoice(choice),
              disabled: !canAfford,
              whileHover: canAfford ? {
                scale: 1.04,
                y: -2
              } : {},
              whileTap: canAfford ? {
                scale: 0.96
              } : {},
              className: `relative text-left rounded-xl p-4 border transition-all ${canAfford ? "glass-card hover-card-scale cursor-pointer border-white/10 hover:border-emerald-500/40" : "opacity-40 cursor-not-allowed border-red-500/20 bg-red-950/10"}`,
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-3xl mb-2",
                children: choice.emoji
              }), /*#__PURE__*/_jsx("p", {
                className: "text-sm font-bold text-white mb-1",
                children: choice.label
              }), /*#__PURE__*/_jsx("p", {
                className: `text-base font-bold ${choice.cost === 0 ? "text-emerald-400" : "text-amber-400"}`,
                children: choice.cost === 0 ? "FREE ₹0" : `₹${choice.cost}`
              }), !canAfford && /*#__PURE__*/_jsx("span", {
                className: "absolute top-2 right-2 text-[9px] font-bold text-red-400 bg-red-500/15 px-1.5 py-0.5 rounded",
                children: "Out of budget"
              })]
            }, idx);
          })
        }), currentSlot > 0 && choices[currentSlot - 1]?.wisdom && /*#__PURE__*/_jsxs(motion.div, {
          initial: {
            opacity: 0,
            y: 5
          },
          animate: {
            opacity: 1,
            y: 0
          },
          className: "mt-4 px-3 py-2 rounded-lg bg-emerald-500/8 border border-emerald-500/20 text-xs text-emerald-300",
          children: ["\uD83D\uDCA1 ", choices[currentSlot - 1]?.wisdom]
        })]
      }, slot.id)
    }), !gameOver && /*#__PURE__*/_jsxs("div", {
      className: "flex items-center justify-center gap-1.5 text-xs text-zinc-500",
      children: [/*#__PURE__*/_jsx(ChevronRight, {
        size: 12
      }), /*#__PURE__*/_jsx("span", {
        children: "Manage your budget wisely \u2014 every choice counts!"
      })]
    })]
  });
}
