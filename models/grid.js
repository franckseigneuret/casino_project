const mongoose = require('mongoose');

var gridSchema = mongoose.Schema({
  session_game_id: Number,
  users: Array,

  as: Number,
  two: Number,
  three: Number,
  four: Number,
  five: Number,
  six: Number,
  subTotal: Number,       // as + two + three + four + five + six

  bonus: Number,          //                                                      + 35 si subTotal >= 63
  total1: Number,         //                                                      subTotal + bonus

  fullHouse: Number,      // full (3 dés identiques + 2 dés identiques)
  smallStraight: Number,  // petite suite (1-2-3-4, 2-3-4-5, or 3-4-5-6)          30
  largeStraight: Number,  // grande suite (1-2-3-4-5 or 2-3-4-5-6)                40

  threeOfAKind: Number,   // brelan (3 dés identiques)                            Somme de tous les dés
  fourOfAKind: Number,    // carré (4 dés identiques)                             Somme de tous les dés
  yahtzee: Number,        // 5 dés identiques                                     50
  chance: Number,         //                                                      Somme de tous les dés
  min: Number,            // min < max                                            Somme de tous les dés
  max: Number,            // max > min                                            Somme de tous les dés
  total2: Number,
  total: Number,          //                                                      total1 + total2
});

module.exports = mongoose.model('grid', gridSchema);
