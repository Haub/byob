// Grand Total for each country
// Return some of the curly braces so they are uniform
// Remove  dest_country dupes

const resettlementData = [
  
  {
    destCountry: "Argentina",
    grandTotal: null,

    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 105,
      totalMinors: 42
    }
  },

  {
    destCountry: "Australia",
    grandTotal: null,
    
    originCountry: {
      name: "Afghanistan",
      individualTotal: 826,
      totalMinors: 366
    }, 
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 81,
      totalMinors: 39
    },
    
    originCountry: {
      name: "Bhutan",
      individualTotal: 1,
      totalMinors: 1
    },
  
    originCountry: {
      name: "Sudan",
      individualTotal: 43,
      totalMinors: 15
    },

    originCountry: {
      name: "Iraq",
      individualTotal: 47,
      totalMinors: 21
    },

    originCountry: {
      name: "Eritrea",
      individualTotal: 386,
      totalMinors: 161
    },
    
    originCountry: {
      name: "Dem. Rep. of the Congo",
      individualTotal: 1306,
      totalMinors: 714
    },
    
    originCountry: {
      name: "Myanmar",
      individualTotal: 315,
      totalMinors: 134
    },
   
    originCountry: {
      name: "Somalia",
      individualTotal: 171,
      totalMinors: 57
    },
    
    originCountry: {
      name: "Iran (Islamic Rep. of)",
      individualTotal: 28,
      totalMinors: 5
    },
    
    originCountry: {
      name: "All others",
      individualTotal: 571,
      totalMinors: 242
    }
  },

  {  
    destCountry: "Austria",
    grandTotal: null,
    
    originCountry: {
      name: "All others",
      individualTotal: 1,
      totalMinors: 0
    },

    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 253,
      totalMinors: 130
    }
  },  

  {
    destCountry: "Beligium",
    grandTotal: null,
    
    originCountry: {
        name: "Sudan",
        individualTotal: 1,
        totalMinors: 1
    },
  
    originCountry: {
      name: "All others",
      individualTotal: 12,
      totalMinors: 8
    },
    
    originCountry: {
      name: "Dem. Rep. of the Congo",
      individualTotal: 169,
      totalMinors: 69
    },
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 1357,
      totalMinors: 711
    }
  },
  
  {
    destCountry: "Brazil",
    grandTotal: null,
    
    originCountry: {
      name: "All others",
      individualTotal: 2,
      totalMinors: 0
  },

  {
    destCountry: "Canada",
    grandTotal: null,
    
    originCountry: {
      name: "Dem. Rep. of the Congo",
      individualTotal: 128,
      totalMinors: 64
    },
   
    originCountry: {
      name: "Iraq",
      individualTotal: 401,
      totalMinors: 171
    },
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 1327,
      totalMinors: 807
    },
    
    originCountry: {
      name: "Eritrea",
      individualTotal: 529,
      totalMinors: 253
    },
   
    originCountry: {
      name: "Myanmar",
      individualTotal: 102,
      totalMinors: 47
    },
    
    originCountry: {
      name: "Somalia",
      individualTotal: 356,
      totalMinors: 187
    },
    
    originCountry: {
      name: "Iran (Islamic Rep. of)",
      individualTotal: 64,
      totalMinors: 19
    },
   
    originCountry: {
      name: "Afghanistan",
      individualTotal: 57,
      totalMinors: 25
    },

    originCountry: {
      name: "All others",
      individualTotal: 909,
      totalMinors: 482
    },
    
    originCountry: {
      name: "Sudan",
      individualTotal: 245,
      totalMinors: 122
    }
  },

  {  
    destCountry: "Chile",
    grandTotal: null,
  
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 95,
      totalMinors: 49
    }
  },

  {
    destCountry: "Croatia",
    grandTotal: null,

    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 157,
      totalMinors: 84
    }
  },

  {
    destCountry: "Cyprus",
    grandTotal: null,
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 6,
      totalMinors: 2
    }
  },

  {
    destCountry: "Estonia",
    grandTotal: null,
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 143,
      totalMinors: 71
    },
  
    originCountry: {
      name: "All others",
      individualTotal: 6,
      totalMinors: 3
    }
  },

  {
    destCountry: "Finland",
    grandTotal: null,
   
    originCountry: {
      name: "Sudan",
      individualTotal: 20,
      totalMinors: 14
    },
    
    originCountry: {
      name: "Iran (Islamic Rep. of)",
      individualTotal: 1,
      totalMinors: 0
    },
 
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 664,
      totalMinors: 364
    },
  
    originCountry: {
      name: "Iraq",
      individualTotal: 5,
      totalMinors: 2
    },
    
    originCountry: {
      name: "All others",
      individualTotal: 46,
      totalMinors: 17
    },
    
    originCountry: {
      name: "Afghanistan",
      individualTotal: 11,
      totalMinors: 5
    },
   
    originCountry: {
      name: "Eritrea",
      individualTotal: 4,
      totalMinors: 2
    },
    
    originCountry: {
      name: "Dem. Rep. of the Congo",
      individualTotal: 180,
      totalMinors: 105
    },
   
    originCountry: {
      name: "Somalia",
      individualTotal: 14,
      totalMinors: 8
    }
  },

  {
    destCountry: "France",
    grandTotal: null,
   
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 4207,
      totalMinors: 2292
    },
    
    originCountry: {
      name: "Iraq",
      individualTotal: 25,
      totalMinors: 9
    },
    
    originCountry: {
      name: "All others",
      individualTotal: 460,
      totalMinors: 236
    },
   
    originCountry: {
      name: "Afghanistan",
      individualTotal: 2,
      totalMinors: 1
    },
    
    originCountry: {
      name: "Eritrea",
      individualTotal: 35,
      totalMinors: 11
    },
    
    originCountry: {
      name: "Dem. Rep. of the Congo",
      individualTotal: 27,
      totalMinors: 16
    },
    
    originCountry: {
      name: "Somalia",
      individualTotal: 125,
      totalMinors: 87
    },
    
    originCountry: {
      name: "Sudan",
      individualTotal: 325,
      totalMinors: 168
    },
    
    originCountry: {
      name: "Iran (Islamic Rep. of)",
      individualTotal: 1,
      totalMinors: 0
    }
  },

  {
    destCountry: "Germany",
    grandTotal: null,
      
    originCountry: {
      name: "Eritrea",
      individualTotal: 14,
      totalMinors: 3
    },
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 3652,
      totalMinors: 1771
    },
    
    originCountry: {
      name: "Somalia",
      individualTotal: 8,
      totalMinors: 1
    },
   
    originCountry: {
      name: "All others",
      individualTotal: 54,
      totalMinors: 20
    },
    
    originCountry: {
      name: "Sudan",
      individualTotal: 125,
      totalMinors: 69
    },
   
    originCountry: {
      name: "Iran (Islamic Rep. of)",
      individualTotal: 4,
      totalMinors: 3
    },
    
    originCountry: {
      name: "Iraq",
      individualTotal: 10,
      totalMinors: 5
    }
  },

  {
    destCountry: "Iceland",
    grandTotal: null,
    
    originCountry: {
      name: "Iraq",
      individualTotal: 36,
      totalMinors: 20
    },
   
    originCountry: {
      name: "All others",
      individualTotal: 14,
      totalMinors: 3
    },
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 21,
      totalMinors: 12
    }
  },

  {
    destCountry: "Ireland",
    grandTotal: null,
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 303,
      totalMinors: 169
    },
   
    originCountry: {
      name: "Iraq",
      individualTotal: 5,
      totalMinors: 0
    }
  },

  {
    destCountry: "Italy",
    grandTotal: null,
    
    originCountry: {
      name: "All others",
      individualTotal: 56,
      totalMinors: 22
    },
  
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 1062,
      totalMinors: 592
    },

    originCountry: {
      name: "Eritrea",
      individualTotal: 270,
      totalMinors: 123
    },
  
    originCountry: {
      name: "Iraq",
      individualTotal: 4,
      totalMinors: 0
    }
  },

  {
    destCountry: "Japan",
    grandTotal: null,
  
    originCountry: {
      name: "Myanmar",
      individualTotal: 39,
      totalMinors: 18
    }
  },
  
  {
    destCountry: "Latvia",
    grandTotal: null,
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 65,
      totalMinors: 37
    }
  },

  {
    destCountry: "Lithuania",
    grandTotal: null,
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 191,
      totalMinors: 102
    },
   
    originCountry: {
      name: "All others",
      individualTotal: 9,
      totalMinors: 1
    }
  },

  {
    destCountry: "Luxembourg",
    grandTotal: null,
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 216,
      totalMinors: 108
    },
   
    originCountry: {
      name: "Iran (Islamic Rep. of)",
      individualTotal: 1,
      totalMinors: 0
    },

    originCountry: {
      name: "Iraq",
      individualTotal: 2,
      totalMinors: 0
    }
  },

  {
    destCountry: "Malta",
    grandTotal: null,
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 11,
      totalMinors: 6
    }
  },

  {
    destCountry: "Monaco",
    grandTotal: null,
   
    originCountry: {
      name: "Iraq",
      individualTotal: 30,
      totalMinors: 12
    }
  },

  {
    destCountry: "Netherlands",
    grandTotal: null,
    
    originCountry: {
      name: "Somalia",
      individualTotal: 7,
      totalMinors: 5
    },
    
    originCountry: {
      name: "Iraq",
      individualTotal: 9,
      totalMinors: 2
    },
    
    originCountry: {
      name: "Sudan",
      individualTotal: 7,
      totalMinors: 5
    },
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 2835,
      totalMinors: 1479
    },
   
    originCountry: {
      name: "All others",
      individualTotal: 57,
      totalMinors: 27
    },
    
    originCountry: {
      name: "Eritrea",
      individualTotal: 2,
      totalMinors: 1
    },
    
    originCountry: {
      name: "Afghanistan",
      individualTotal: 1,
      totalMinors: 1
    },
    
    originCountry: {
      name: "Iran (Islamic Rep. of)",
      individualTotal: 3,
      totalMinors: 0
    },
    
    originCountry: {
      name: "Dem. Rep. of the Congo",
      individualTotal: 182,
      totalMinors: 98
    }
  },

  {
    destCountry: "New Zealand",
    grandTotal: null,
    
    originCountry: {
      name: "Eritrea",
      individualTotal: 2,
      totalMinors: 2
    },

    originCountry: {
      name: "Afghanistan",
      individualTotal: 28,
      totalMinors: 15
    },
   
    originCountry: {
      name: "Myanmar",
      individualTotal: 177,
      totalMinors: 74
    },
   
    originCountry: {
      name: "Iran (Islamic Rep. of)",
      individualTotal: 10,
      totalMinors: 3
    },
   
    originCountry: {
      name: "Dem. Rep. of the Congo",
      individualTotal: 3,
      totalMinors: 1
    },
    
    originCountry: {
      name: "Somalia",
      individualTotal: 20,
      totalMinors: 8
    },
   
    originCountry: {
      name: "Iraq",
      individualTotal: 53,
      totalMinors: 13
    },
   
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 678,
      totalMinors: 434
    },
   
    originCountry: {
      name: "All others",
      individualTotal: 338,
      totalMinors: 148
    }
  },

  {
    destCountry: "Norway",
    grandTotal: null,
    
    originCountry: {
      name: "All others",
      individualTotal: 50,
      totalMinors: 30
    },
   
    originCountry: {
      name: "Myanmar",
      individualTotal: 5,
      totalMinors: 3
    },
  
    originCountry: {
      name: "Iran (Islamic Rep. of)",
      individualTotal: 1,
      totalMinors: 0
    },
   
    originCountry: {
      name: "Dem. Rep. of the Congo",
      individualTotal: 31,
      totalMinors: 15
    },
  
    originCountry: {
      name: "Somalia",
      individualTotal: 9,
      totalMinors: 6
    },
    
    originCountry: {
      name: "Iraq",
      individualTotal: 8,
      totalMinors: 2
    },

    originCountry: {
      name: "Sudan",
      individualTotal: 19,
      totalMinors: 12
    },
 
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 3002,
      totalMinors: 1831
    }
  },

  {
    destCountry: "Portugal",
    grandTotal: null,
    
    originCountry: {
      name: "Somalia",
      individualTotal: 1,
      totalMinors: 0
    },
  
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 221,
      totalMinors: 139
    },
    
    originCountry: {
      name: "Sudan",
      individualTotal: 6,
      totalMinors: 1
    },
    
    originCountry: {
      name: "Eritrea",
      individualTotal: 1,
      totalMinors: 0
    }
  },

  {
    destCountry: "Rep. of Korea",
    grandTotal: null,
    
    originCountry: {
      name: "All others",
      individualTotal: 24,
      totalMinors: 0
    },
    
    originCountry: {
      name: "Myanmar",
      individualTotal: 42,
      totalMinors: 26
    }
  },

  {
    destCountry: "Romania",
    grandTotal: null,

    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 48,
      totalMinors: 26
    }
  },

  {
    destCountry: "Slovenia",
    grandTotal: null,

   
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 67,
      totalMinors: 39
    }
  },

  {
    destCountry: "Spain",
    grandTotal: null,
  
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 1369,
      totalMinors: 782
    },
 
    originCountry: {
      name: "All others",
      individualTotal: 4,
      totalMinors: 2
    }
  },

  {
    destCountry: "Sweden",
    grandTotal: null,
    
    originCountry: {
      name: "Myanmar",
      individualTotal: 5,
      totalMinors: 3
    },
 
    originCountry: {
      name: "Iran (Islamic Rep. of)",
      individualTotal: 5,
      totalMinors: 1
    },

    originCountry: {
      name: "Dem. Rep. of the Congo",
      individualTotal: 888,
      totalMinors: 476
    },
  
    originCountry: {
      name: "Iraq",
      individualTotal: 56,
      totalMinors: 19
    },
  
    originCountry: {
      name: "Sudan",
      individualTotal: 177,
      totalMinors: 83
    },
  
    originCountry: {
      name: "Eritrea",
      individualTotal: 655,
      totalMinors: 244
    },
 
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 2875,
      totalMinors: 1610
    },
 
    originCountry: {
      name: "All others",
      individualTotal: 617,
      totalMinors: 310
    },
  
    originCountry: {
      name: "Afghanistan",
      individualTotal: 308,
      totalMinors: 150
    },
 
    originCountry: {
      name: "Somalia",
      individualTotal: 369,
      totalMinors: 182
    }
  },

  {
    destCountry: "Switzerland",
    
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 1307,
      totalMinors: 735
    },
    
    originCountry: {
      name: "All others",
      individualTotal: 15,
      totalMinors: 8
    },
 
    originCountry: {
      name: "Sudan",
      individualTotal: 9,
      totalMinors: 5
    },
 
    originCountry: {
      name: "Iraq",
      individualTotal: 1,
      totalMinors: 0
    }
  },

  {
    destCountry: "United Kingdom of Great Britain and Northern Ireland",
    grandTotal: null,
    
    originCountry: {
      name: "Eritrea",
      individualTotal: 42,
      totalMinors: 29
    },
  
    originCountry: {
      name: "Dem. Rep. of the Congo",
      individualTotal: 263,
      totalMinors: 117
    },
 
    originCountry: {
      name: "Somalia",
      individualTotal: 267,
      totalMinors: 140
    },
 
    originCountry: {
      name: "Sudan",
      individualTotal: 460,
      totalMinors: 261
    },

    originCountry: {
      name: "Iran (Islamic Rep. of)",
      individualTotal: 40,
      totalMinors: 18
    },
 
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 7072,
      totalMinors: 3520
    },
 
    originCountry: {
      name: "Iraq",
      individualTotal: 650,
      totalMinors: 338
    },
  
    originCountry: {
      name: "All others",
      individualTotal: 328,
      totalMinors: 154
    },
  
    originCountry: {
      name: "Afghanistan",
      individualTotal: 96,
      totalMinors: 53
    }
  },

  {
    destCountry: "United States of America",
    grandTotal: null,
    
    originCountry: {
      name: "Iraq",
      individualTotal: 1698,
      totalMinors: 801
    },
 
    originCountry: {
      name: "All others",
      individualTotal: 1994,
      totalMinors: 883
    },
  
    originCountry: {
      name: "Sudan",
      individualTotal: 887,
      totalMinors: 485
    },
 
    originCountry: {
      name: "Eritrea",
      individualTotal: 999,
      totalMinors: 489
    },
 
    originCountry: {
      name: "Syrian Arab Rep.",
      individualTotal: 3942,
      totalMinors: 2226
    },
  
    originCountry: {
      name: "Afghanistan",
      individualTotal: 840,
      totalMinors: 421
    },
  
    originCountry: {
      name: "Somalia",
      individualTotal: 1237,
      totalMinors: 651
    },
  
    originCountry: {
      name: "Myanmar",
      individualTotal: 4661,
      totalMinors: 2067
    },
  
    originCountry: {
      name: "Iran (Islamic Rep. of)",
      individualTotal: 627,
      totalMinors: 123
    },
  
    originCountry: {
      name: "Dem. Rep. of the Congo",
      individualTotal: 9759,
      totalMinors: 5052
    },
  
    originCountry: {
      name: "Bhutan",
      individualTotal: 138,
      totalMinors: 74
    }
  },

  {
    destCountry: "Uruguay",
    grandTotal: null,
    
    originCountry: {
      name: "All others",
      individualTotal: 16,
      totalMinors: 5
    }
  } 
]


//   const resettlementArrays = [
//   [ 'Syrian Arab Rep.', 'Argentina',  42, 105 ],
//   [ 'Afghanistan',  'Australia',  366,  826 ],
//   [ 'Syrian Arab Rep.', 'Australia',  39, 81 ],
//   [ 'Bhutan', 'Australia',  1,  1 ],
//   [ 'Sudan',  'Australia',  15, 43 ],
//   [ 'Iraq', 'Australia',  21, 47 ],
//   [ 'Eritrea',  'Australia',  161,  386 ],
//   [ 'Dem. Rep. of the Congo', 'Australia',  714,  1306 ],
//   [ 'Myanmar',  'Australia',  134,  315 ],
//   [ 'Somalia',  'Australia',  57, 171 ],
//   [ 'Iran (Islamic Rep. of)', 'Australia',  5,  28 ],
//   [ 'All others', 'Australia',  242,  571 ],
//   [ 'All others', 'Austria',  0,  1 ],
//   [ 'Syrian Arab Rep.', 'Austria',  130,  253 ],
//   [ 'Sudan',  'Belgium',  1,  1 ],
//   [ 'All others', 'Belgium',  8,  12 ],
//   [ 'Dem. Rep. of the Congo', 'Belgium',  69, 169 ],
//   [ 'Syrian Arab Rep.', 'Belgium',  711,  1357 ],
//   [ 'All others', 'Brazil', 0,  2 ],
//   [ 'Dem. Rep. of the Congo', 'Canada', 64, 128 ],
//   [ 'Iraq', 'Canada', 171, 401 ],
//   [ 'Syrian Arab Rep.', 'Canada', 807, 1327 ],
//   [ 'Eritrea', 'Canada',  253,  529 ],
//   [ 'Myanmar', 'Canada',  47, 102 ],
//   [ 'Somalia', 'Canada',  187,  356 ],
//   [ 'Iran (Islamic Rep. of)', 'Canada', 19, 64 ],
//   [ 'Afghanistan',  'Canada', 25, 57 ],
//   [ 'All others', 'Canada', 482,  909 ],
//   [ 'Sudan',  'Canada', 122,  245 ],
//   [ 'Syrian Arab Rep.', 'Chile',  49, 95 ],
//   [ 'Syrian Arab Rep.', 'Croatia',  84, 157 ],
//   [ 'Syrian Arab Rep.', 'Cyprus', 2,  6 ],
//   [ 'Syrian Arab Rep.', 'Estonia',  71, 143 ],
//   [ 'All others', 'Estonia',  3,  6 ],
//   [ 'Sudan',  'Finland',  14, 20 ],
//   [ 'Iran (Islamic Rep. of)', 'Finland',  0,  1 ],
//   [ 'Syrian Arab Rep.', 'Finland',  364,  664 ],
//   [ 'Iraq', 'Finland',  2,  5 ],
//   [ 'All others', 'Finland',  17, 46 ],
//   [ 'Afghanistan', 'Finland', 5,  11 ],
//   [ 'Eritrea', 'Finland', 2,  4 ],
//   [ 'Dem. Rep. of the Congo', 'Finland',  105,  180 ],
//   [ 'Somalia', 'Finland', 8, 14 ],
//   [ 'Syrian Arab Rep.', 'France', 2292, 4207 ],
//   [ 'Iraq', 'France', 9,  25 ],
//   [ 'All others', 'France', 236,  460 ],
//   [ 'Afghanistan',  'France', 1,  2 ],
//   [ 'Eritrea',  'France', 11, 35 ],
//   [ 'Dem. Rep. of the Congo', 'France', 16, 27 ],
//   [ 'Somalia',  'France', 87, 125 ],
//   [ 'Sudan',  'France', 168,  325 ],
//   [ 'Iran (Islamic Rep. of)', 'France', 0,  1 ],
//   [ 'Eritrea',  'Germany',  3,  14 ],
//   [ 'Syrian Arab Rep.', 'Germany',  1771, 3652 ],
//   [ 'Somalia',  'Germany',  1,  8 ],
//   [ 'All others', 'Germany',  20, 54 ],
//   [ 'Sudan',  'Germany',  69, 125 ],
//   [ 'Iran (Islamic Rep. of)', 'Germany',  3,  4 ],
//   [ 'Iraq', 'Germany',  5,  10 ],
//   [ 'Iraq', 'Iceland',  20, 36 ],
//   [ 'All others', 'Iceland',  3,  14 ],
//   [ 'Syrian Arab Rep.', 'Iceland',  12, 21 ],
//   [ 'Syrian Arab Rep.', 'Ireland',  169,  303 ],
//   [ 'Iraq', 'Ireland',  0,  5 ],
//   [ 'All others', 'Italy',  22, 56 ],
//   [ 'Syrian Arab Rep.', 'Italy',  592,  1062 ],
//   [ 'Eritrea',  'Italy',  123,  270 ],
//   [ 'Iraq', 'Italy',  0,  4 ],
//   [ 'Myanmar',  'Japan',  18, 39 ],
//   [ 'Syrian Arab Rep.', 'Latvia', 37, 65 ],
//   [ 'Syrian Arab Rep.', 'Lithuania',  102,  191 ],
//   [ 'All others', 'Lithuania',  1,  9 ],
//   [ 'Syrian Arab Rep.', 'Luxembourg', 108,  216 ],
//   [ 'Iran (Islamic Rep. of)', 'Luxembourg', 0,  1 ],
//   [ 'Iraq', 'Luxembourg', 0,  2 ],
//   [ 'Syrian Arab Rep.', 'Malta',  6,  11 ],
//   [ 'Iraq', 'Monaco', 12, 30 ],
//   [ 'Somalia',  'Netherlands',  5,  7 ],
//   [ 'Iraq', 'Netherlands',  2,  9 ],
//   [ 'Sudan',  'Netherlands',  5,  7 ],
//   [ 'Syrian Arab Rep.', 'Netherlands',  1479, 2835 ],
//   [ 'All others', 'Netherlands',  27, 57 ],
//   [ 'Eritrea',  'Netherlands',  1,  2 ],
//   [ 'Afghanistan',  'Netherlands',  1,  1 ],
//   [ 'Iran (Islamic Rep. of)', 'Netherlands',  0,  3 ],
//   [ 'Dem. Rep. of the Congo', 'Netherlands',  98, 182 ],
//   [ 'Eritrea',  'New Zealand',  2,  2 ],
//   [ 'Afghanistan',  'New Zealand',  15, 28 ],
//   [ 'Myanmar',  'New Zealand',  74, 177 ],
//   [ 'Iran (Islamic Rep. of)', 'New Zealand',  3,  10 ],
//   [ 'Dem. Rep. of the Congo', 'New Zealand',  1,  3 ],
//   [ 'Somalia',  'New Zealand',  8,  20 ],
//   [ 'Iraq', 'New Zealand',  13, 53 ],
//   [ 'Syrian Arab Rep.', 'New Zealand',  434,  678 ],
//   [ 'All others', 'New Zealand',  148,  338 ],
//   [ 'All others', 'Norway', 30, 50 ],,
//   [ 'Eritrea',  'Norway', 6,  8 ]
//   [ 'Afghanistan',  'Norway', 2,  3 ],
//   [ 'Myanmar',  'Norway', 3,  5 ],
//   [ 'Iran (Islamic Rep. of)', 'Norway', 0,  1 ],
//   [ 'Dem. Rep. of the Congo', 'Norway', 15, 31 ],
//   [ 'Somalia',  'Norway', 6,  9 ],
//   [ 'Iraq', 'Norway', 2,  8 ],
//   [ 'Sudan',  'Norway', 12, 19 ],
//   [ 'Syrian Arab Rep.', 'Norway', 1831, 3002 ],
//   [ 'Somalia',  'Portugal', 0,  1 ],
//   [ 'Syrian Arab Rep.', 'Portugal', 139,  221 ],
//   [ 'Sudan',  'Portugal', 1,  6 ],
//   [ 'Eritrea',  'Portugal', 0,  1 ],
//   [ 'All others', 'Rep. of Korea',  0,  24 ],
//   [ 'Myanmar',  'Rep. of Korea',  26, 42 ],
//   [ 'Syrian Arab Rep.', 'Romania',  26, 48 ],
//   [ 'Syrian Arab Rep.', 'Slovenia', 39, 67 ],
//   [ 'Syrian Arab Rep.', 'Spain',  782,  1369 ],
//   [ 'All others', 'Spain',  2,  4 ],
//   [ 'Myanmar',  'Sweden', 3,  5 ],
//   [ 'Iran (Islamic Rep. of)', 'Sweden', 1,  5 ],
//   [ 'Dem. Rep. of the Congo', 'Sweden', 476,  888 ],
//   [ 'Iraq', 'Sweden', 19, 56 ],
//   [ 'Sudan',  'Sweden', 83, 177 ],
//   [ 'Eritrea',  'Sweden', 244,  655 ],
//   [ 'Syrian Arab Rep.', 'Sweden', 1610, 2875 ],
//   [ 'All others', 'Sweden', 310,  617 ],
//   [ 'Afghanistan',  'Sweden', 150,  308 ],
//   [ 'Somalia',  'Sweden', 182,  369 ],
//   [ 'Syrian Arab Rep.', 'Switzerland',  735,  1307 ],
//   [ 'All others', 'Switzerland',  8,  15 ],
//   [ 'Sudan',  'Switzerland',  5,  9 ],
//   [ 'Iraq', 'Switzerland',  0,  1 ],
//   [ 'Eritrea',  'United Kingdom of Great Britain and Northern Ireland', 29, 42 ],
//   [ 'Dem. Rep. of the Congo', 'United Kingdom of Great Britain and Northern Ireland', 117,  263 ],
//   [ 'Somalia',  'United Kingdom of Great Britain and Northern Ireland', 140,  267 ],
//   [ 'Sudan',  'United Kingdom of Great Britain and Northern Ireland', 261,  460 ],
//   [ 'Iran (Islamic Rep. of)', 'United Kingdom of Great Britain and Northern Ireland', 18, 40 ],
//   [ 'Syrian Arab Rep.', 'United Kingdom of Great Britain and Northern Ireland', 3520, 7072 ],
//   [ 'Iraq', 'United Kingdom of Great Britain and Northern Ireland', 338,  650 ],
//   [ 'All others', 'United Kingdom of Great Britain and Northern Ireland', 154,  328 ],
//   [ 'Afghanistan', 'United Kingdom of Great Britain and Northern Ireland',  53, 96 ],
//   [ 'Iraq', 'United States of America', 801,  1698 ],
//   [ 'All others', 'United States of America', 883,  1994 ],
//   [ 'Sudan', 'United States of America',  485,  887 ],
//   [ 'Eritrea', 'United States of America',  489,  999 ],
//   [ 'Syrian Arab Rep.', 'United States of America', 2226, 3942 ],
//   [ 'Afghanistan', 'United States of America',  421,  840 ],
//   [ 'Somalia', 'United States of America',  651,  1237 ],
//   [ 'Myanmar', 'United States of America',  2067, 4661 ],
//   [ 'Iran (Islamic Rep. of)', 'United States of America', 123,  627 ],
//   [ 'Dem. Rep. of the Congo', 'United States of America', 5052, 9759 ],
//   [ 'Bhutan', 'United States of America', 74, 138 ],
//   [ 'All others', 'Uruguay', 5, 16 ]
// ]

const resettlementData = resettlementArrays.reduce((acc, array) => {
  const destCountry = array[1];
  const origCountry = array[0];
  const totalMinors = array[2];
  const indivTotal = array[3];

  acc.push({
    [ destCountry]: { 
      originCountry: {
              ame: o rigCoutry,
              inividalTotal: indiv Total,
              toalMinors: totalMi
            n
              ors
      }
    }
  })

  return acc;
}, []);

console.log(JSON.stringify(resettlementData));