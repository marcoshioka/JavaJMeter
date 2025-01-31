/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 294.0, "minX": 0.0, "maxY": 3168.0, "series": [{"data": [[0.0, 294.0], [0.1, 294.0], [0.2, 295.0], [0.3, 295.0], [0.4, 295.0], [0.5, 295.0], [0.6, 295.0], [0.7, 296.0], [0.8, 296.0], [0.9, 296.0], [1.0, 297.0], [1.1, 297.0], [1.2, 297.0], [1.3, 297.0], [1.4, 298.0], [1.5, 298.0], [1.6, 298.0], [1.7, 298.0], [1.8, 300.0], [1.9, 300.0], [2.0, 300.0], [2.1, 300.0], [2.2, 300.0], [2.3, 300.0], [2.4, 301.0], [2.5, 301.0], [2.6, 301.0], [2.7, 301.0], [2.8, 302.0], [2.9, 302.0], [3.0, 303.0], [3.1, 303.0], [3.2, 303.0], [3.3, 303.0], [3.4, 304.0], [3.5, 304.0], [3.6, 304.0], [3.7, 304.0], [3.8, 305.0], [3.9, 305.0], [4.0, 306.0], [4.1, 306.0], [4.2, 306.0], [4.3, 306.0], [4.4, 306.0], [4.5, 306.0], [4.6, 306.0], [4.7, 306.0], [4.8, 306.0], [4.9, 306.0], [5.0, 310.0], [5.1, 310.0], [5.2, 313.0], [5.3, 313.0], [5.4, 313.0], [5.5, 313.0], [5.6, 313.0], [5.7, 314.0], [5.8, 314.0], [5.9, 314.0], [6.0, 314.0], [6.1, 314.0], [6.2, 315.0], [6.3, 315.0], [6.4, 315.0], [6.5, 315.0], [6.6, 315.0], [6.7, 316.0], [6.8, 316.0], [6.9, 317.0], [7.0, 317.0], [7.1, 317.0], [7.2, 317.0], [7.3, 319.0], [7.4, 319.0], [7.5, 323.0], [7.6, 323.0], [7.7, 323.0], [7.8, 323.0], [7.9, 324.0], [8.0, 324.0], [8.1, 325.0], [8.2, 325.0], [8.3, 326.0], [8.4, 328.0], [8.5, 328.0], [8.6, 329.0], [8.7, 329.0], [8.8, 329.0], [8.9, 329.0], [9.0, 330.0], [9.1, 330.0], [9.2, 332.0], [9.3, 332.0], [9.4, 332.0], [9.5, 332.0], [9.6, 333.0], [9.7, 333.0], [9.8, 333.0], [9.9, 333.0], [10.0, 333.0], [10.1, 333.0], [10.2, 334.0], [10.3, 334.0], [10.4, 335.0], [10.5, 335.0], [10.6, 339.0], [10.7, 339.0], [10.8, 339.0], [10.9, 339.0], [11.0, 342.0], [11.1, 342.0], [11.2, 344.0], [11.3, 344.0], [11.4, 346.0], [11.5, 346.0], [11.6, 348.0], [11.7, 348.0], [11.8, 349.0], [11.9, 349.0], [12.0, 351.0], [12.1, 351.0], [12.2, 352.0], [12.3, 352.0], [12.4, 354.0], [12.5, 354.0], [12.6, 356.0], [12.7, 356.0], [12.8, 356.0], [12.9, 356.0], [13.0, 360.0], [13.1, 360.0], [13.2, 361.0], [13.3, 361.0], [13.4, 362.0], [13.5, 362.0], [13.6, 365.0], [13.7, 365.0], [13.8, 365.0], [13.9, 365.0], [14.0, 367.0], [14.1, 367.0], [14.2, 371.0], [14.3, 371.0], [14.4, 372.0], [14.5, 372.0], [14.6, 372.0], [14.7, 372.0], [14.8, 372.0], [14.9, 372.0], [15.0, 372.0], [15.1, 372.0], [15.2, 373.0], [15.3, 373.0], [15.4, 373.0], [15.5, 373.0], [15.6, 374.0], [15.7, 374.0], [15.8, 374.0], [15.9, 374.0], [16.0, 374.0], [16.1, 374.0], [16.2, 374.0], [16.3, 374.0], [16.4, 374.0], [16.5, 374.0], [16.6, 374.0], [16.7, 374.0], [16.8, 374.0], [16.9, 374.0], [17.0, 374.0], [17.1, 374.0], [17.2, 375.0], [17.3, 375.0], [17.4, 376.0], [17.5, 376.0], [17.6, 382.0], [17.7, 382.0], [17.8, 383.0], [17.9, 383.0], [18.0, 383.0], [18.1, 383.0], [18.2, 386.0], [18.3, 386.0], [18.4, 386.0], [18.5, 386.0], [18.6, 386.0], [18.7, 386.0], [18.8, 387.0], [18.9, 387.0], [19.0, 389.0], [19.1, 389.0], [19.2, 389.0], [19.3, 389.0], [19.4, 390.0], [19.5, 390.0], [19.6, 391.0], [19.7, 391.0], [19.8, 393.0], [19.9, 393.0], [20.0, 395.0], [20.1, 395.0], [20.2, 396.0], [20.3, 396.0], [20.4, 398.0], [20.5, 398.0], [20.6, 399.0], [20.7, 399.0], [20.8, 400.0], [20.9, 400.0], [21.0, 401.0], [21.1, 401.0], [21.2, 402.0], [21.3, 402.0], [21.4, 403.0], [21.5, 403.0], [21.6, 403.0], [21.7, 403.0], [21.8, 403.0], [21.9, 403.0], [22.0, 404.0], [22.1, 404.0], [22.2, 404.0], [22.3, 404.0], [22.4, 404.0], [22.5, 404.0], [22.6, 404.0], [22.7, 404.0], [22.8, 405.0], [22.9, 405.0], [23.0, 405.0], [23.1, 405.0], [23.2, 407.0], [23.3, 407.0], [23.4, 410.0], [23.5, 410.0], [23.6, 414.0], [23.7, 414.0], [23.8, 414.0], [23.9, 414.0], [24.0, 416.0], [24.1, 416.0], [24.2, 417.0], [24.3, 417.0], [24.4, 417.0], [24.5, 417.0], [24.6, 418.0], [24.7, 418.0], [24.8, 419.0], [24.9, 419.0], [25.0, 421.0], [25.1, 421.0], [25.2, 423.0], [25.3, 423.0], [25.4, 423.0], [25.5, 423.0], [25.6, 426.0], [25.7, 426.0], [25.8, 428.0], [25.9, 428.0], [26.0, 429.0], [26.1, 429.0], [26.2, 433.0], [26.3, 433.0], [26.4, 434.0], [26.5, 434.0], [26.6, 436.0], [26.7, 436.0], [26.8, 436.0], [26.9, 436.0], [27.0, 437.0], [27.1, 437.0], [27.2, 437.0], [27.3, 437.0], [27.4, 437.0], [27.5, 437.0], [27.6, 438.0], [27.7, 438.0], [27.8, 441.0], [27.9, 441.0], [28.0, 442.0], [28.1, 442.0], [28.2, 442.0], [28.3, 442.0], [28.4, 443.0], [28.5, 443.0], [28.6, 443.0], [28.7, 443.0], [28.8, 444.0], [28.9, 444.0], [29.0, 446.0], [29.1, 446.0], [29.2, 447.0], [29.3, 447.0], [29.4, 447.0], [29.5, 447.0], [29.6, 448.0], [29.7, 448.0], [29.8, 448.0], [29.9, 448.0], [30.0, 450.0], [30.1, 450.0], [30.2, 451.0], [30.3, 451.0], [30.4, 452.0], [30.5, 452.0], [30.6, 457.0], [30.7, 457.0], [30.8, 457.0], [30.9, 457.0], [31.0, 457.0], [31.1, 457.0], [31.2, 459.0], [31.3, 459.0], [31.4, 460.0], [31.5, 460.0], [31.6, 461.0], [31.7, 461.0], [31.8, 462.0], [31.9, 462.0], [32.0, 462.0], [32.1, 462.0], [32.2, 465.0], [32.3, 465.0], [32.4, 466.0], [32.5, 466.0], [32.6, 469.0], [32.7, 469.0], [32.8, 470.0], [32.9, 470.0], [33.0, 470.0], [33.1, 470.0], [33.2, 471.0], [33.3, 471.0], [33.4, 473.0], [33.5, 473.0], [33.6, 473.0], [33.7, 473.0], [33.8, 474.0], [33.9, 474.0], [34.0, 474.0], [34.1, 474.0], [34.2, 477.0], [34.3, 477.0], [34.4, 478.0], [34.5, 478.0], [34.6, 482.0], [34.7, 482.0], [34.8, 486.0], [34.9, 486.0], [35.0, 487.0], [35.1, 487.0], [35.2, 488.0], [35.3, 488.0], [35.4, 489.0], [35.5, 489.0], [35.6, 490.0], [35.7, 490.0], [35.8, 490.0], [35.9, 490.0], [36.0, 490.0], [36.1, 490.0], [36.2, 495.0], [36.3, 495.0], [36.4, 497.0], [36.5, 497.0], [36.6, 497.0], [36.7, 497.0], [36.8, 498.0], [36.9, 498.0], [37.0, 498.0], [37.1, 498.0], [37.2, 498.0], [37.3, 498.0], [37.4, 498.0], [37.5, 498.0], [37.6, 499.0], [37.7, 499.0], [37.8, 499.0], [37.9, 499.0], [38.0, 499.0], [38.1, 499.0], [38.2, 499.0], [38.3, 499.0], [38.4, 499.0], [38.5, 499.0], [38.6, 499.0], [38.7, 499.0], [38.8, 499.0], [38.9, 499.0], [39.0, 499.0], [39.1, 499.0], [39.2, 499.0], [39.3, 499.0], [39.4, 499.0], [39.5, 499.0], [39.6, 499.0], [39.7, 499.0], [39.8, 499.0], [39.9, 499.0], [40.0, 499.0], [40.1, 499.0], [40.2, 499.0], [40.3, 499.0], [40.4, 499.0], [40.5, 499.0], [40.6, 499.0], [40.7, 499.0], [40.8, 499.0], [40.9, 499.0], [41.0, 499.0], [41.1, 499.0], [41.2, 499.0], [41.3, 499.0], [41.4, 499.0], [41.5, 499.0], [41.6, 499.0], [41.7, 499.0], [41.8, 499.0], [41.9, 499.0], [42.0, 499.0], [42.1, 499.0], [42.2, 500.0], [42.3, 500.0], [42.4, 500.0], [42.5, 500.0], [42.6, 500.0], [42.7, 500.0], [42.8, 500.0], [42.9, 500.0], [43.0, 501.0], [43.1, 501.0], [43.2, 501.0], [43.3, 501.0], [43.4, 502.0], [43.5, 502.0], [43.6, 503.0], [43.7, 503.0], [43.8, 507.0], [43.9, 507.0], [44.0, 508.0], [44.1, 508.0], [44.2, 511.0], [44.3, 511.0], [44.4, 513.0], [44.5, 513.0], [44.6, 515.0], [44.7, 515.0], [44.8, 515.0], [44.9, 515.0], [45.0, 517.0], [45.1, 517.0], [45.2, 518.0], [45.3, 518.0], [45.4, 518.0], [45.5, 520.0], [45.6, 520.0], [45.7, 524.0], [45.8, 524.0], [45.9, 526.0], [46.0, 526.0], [46.1, 533.0], [46.2, 533.0], [46.3, 534.0], [46.4, 534.0], [46.5, 536.0], [46.6, 536.0], [46.7, 536.0], [46.8, 536.0], [46.9, 536.0], [47.0, 536.0], [47.1, 537.0], [47.2, 537.0], [47.3, 537.0], [47.4, 537.0], [47.5, 543.0], [47.6, 543.0], [47.7, 546.0], [47.8, 546.0], [47.9, 547.0], [48.0, 547.0], [48.1, 551.0], [48.2, 551.0], [48.3, 554.0], [48.4, 554.0], [48.5, 560.0], [48.6, 560.0], [48.7, 560.0], [48.8, 560.0], [48.9, 564.0], [49.0, 564.0], [49.1, 570.0], [49.2, 570.0], [49.3, 573.0], [49.4, 573.0], [49.5, 574.0], [49.6, 574.0], [49.7, 575.0], [49.8, 575.0], [49.9, 579.0], [50.0, 579.0], [50.1, 582.0], [50.2, 582.0], [50.3, 590.0], [50.4, 590.0], [50.5, 590.0], [50.6, 590.0], [50.7, 590.0], [50.8, 590.0], [50.9, 593.0], [51.0, 593.0], [51.1, 596.0], [51.2, 596.0], [51.3, 598.0], [51.4, 598.0], [51.5, 598.0], [51.6, 598.0], [51.7, 598.0], [51.8, 598.0], [51.9, 599.0], [52.0, 599.0], [52.1, 600.0], [52.2, 600.0], [52.3, 600.0], [52.4, 600.0], [52.5, 601.0], [52.6, 601.0], [52.7, 615.0], [52.8, 615.0], [52.9, 615.0], [53.0, 615.0], [53.1, 623.0], [53.2, 623.0], [53.3, 624.0], [53.4, 624.0], [53.5, 624.0], [53.6, 624.0], [53.7, 625.0], [53.8, 625.0], [53.9, 626.0], [54.0, 626.0], [54.1, 628.0], [54.2, 628.0], [54.3, 631.0], [54.4, 631.0], [54.5, 633.0], [54.6, 633.0], [54.7, 637.0], [54.8, 637.0], [54.9, 637.0], [55.0, 637.0], [55.1, 644.0], [55.2, 644.0], [55.3, 645.0], [55.4, 645.0], [55.5, 650.0], [55.6, 650.0], [55.7, 651.0], [55.8, 651.0], [55.9, 660.0], [56.0, 660.0], [56.1, 660.0], [56.2, 660.0], [56.3, 662.0], [56.4, 662.0], [56.5, 665.0], [56.6, 665.0], [56.7, 666.0], [56.8, 666.0], [56.9, 671.0], [57.0, 671.0], [57.1, 672.0], [57.2, 672.0], [57.3, 674.0], [57.4, 674.0], [57.5, 680.0], [57.6, 680.0], [57.7, 682.0], [57.8, 682.0], [57.9, 684.0], [58.0, 684.0], [58.1, 684.0], [58.2, 684.0], [58.3, 686.0], [58.4, 686.0], [58.5, 690.0], [58.6, 690.0], [58.7, 691.0], [58.8, 691.0], [58.9, 694.0], [59.0, 694.0], [59.1, 695.0], [59.2, 695.0], [59.3, 697.0], [59.4, 697.0], [59.5, 700.0], [59.6, 700.0], [59.7, 701.0], [59.8, 701.0], [59.9, 713.0], [60.0, 713.0], [60.1, 714.0], [60.2, 714.0], [60.3, 716.0], [60.4, 716.0], [60.5, 718.0], [60.6, 718.0], [60.7, 720.0], [60.8, 720.0], [60.9, 721.0], [61.0, 721.0], [61.1, 726.0], [61.2, 726.0], [61.3, 731.0], [61.4, 731.0], [61.5, 733.0], [61.6, 733.0], [61.7, 738.0], [61.8, 738.0], [61.9, 745.0], [62.0, 745.0], [62.1, 745.0], [62.2, 745.0], [62.3, 747.0], [62.4, 747.0], [62.5, 748.0], [62.6, 748.0], [62.7, 748.0], [62.8, 748.0], [62.9, 748.0], [63.0, 748.0], [63.1, 748.0], [63.2, 748.0], [63.3, 749.0], [63.4, 749.0], [63.5, 749.0], [63.6, 749.0], [63.7, 749.0], [63.8, 749.0], [63.9, 750.0], [64.0, 750.0], [64.1, 751.0], [64.2, 751.0], [64.3, 751.0], [64.4, 751.0], [64.5, 755.0], [64.6, 755.0], [64.7, 756.0], [64.8, 756.0], [64.9, 757.0], [65.0, 757.0], [65.1, 759.0], [65.2, 759.0], [65.3, 763.0], [65.4, 763.0], [65.5, 765.0], [65.6, 765.0], [65.7, 775.0], [65.8, 775.0], [65.9, 777.0], [66.0, 777.0], [66.1, 777.0], [66.2, 777.0], [66.3, 782.0], [66.4, 782.0], [66.5, 783.0], [66.6, 783.0], [66.7, 787.0], [66.8, 787.0], [66.9, 789.0], [67.0, 789.0], [67.1, 791.0], [67.2, 791.0], [67.3, 791.0], [67.4, 791.0], [67.5, 796.0], [67.6, 796.0], [67.7, 797.0], [67.8, 797.0], [67.9, 801.0], [68.0, 801.0], [68.1, 803.0], [68.2, 803.0], [68.3, 814.0], [68.4, 814.0], [68.5, 816.0], [68.6, 816.0], [68.7, 816.0], [68.8, 816.0], [68.9, 819.0], [69.0, 819.0], [69.1, 826.0], [69.2, 826.0], [69.3, 826.0], [69.4, 826.0], [69.5, 831.0], [69.6, 831.0], [69.7, 834.0], [69.8, 834.0], [69.9, 836.0], [70.0, 836.0], [70.1, 841.0], [70.2, 841.0], [70.3, 844.0], [70.4, 844.0], [70.5, 845.0], [70.6, 845.0], [70.7, 852.0], [70.8, 852.0], [70.9, 854.0], [71.0, 854.0], [71.1, 855.0], [71.2, 855.0], [71.3, 862.0], [71.4, 862.0], [71.5, 863.0], [71.6, 863.0], [71.7, 864.0], [71.8, 864.0], [71.9, 866.0], [72.0, 866.0], [72.1, 872.0], [72.2, 872.0], [72.3, 874.0], [72.4, 874.0], [72.5, 875.0], [72.6, 875.0], [72.7, 875.0], [72.8, 875.0], [72.9, 880.0], [73.0, 880.0], [73.1, 881.0], [73.2, 881.0], [73.3, 886.0], [73.4, 886.0], [73.5, 891.0], [73.6, 891.0], [73.7, 892.0], [73.8, 892.0], [73.9, 896.0], [74.0, 896.0], [74.1, 897.0], [74.2, 897.0], [74.3, 900.0], [74.4, 900.0], [74.5, 902.0], [74.6, 902.0], [74.7, 909.0], [74.8, 909.0], [74.9, 915.0], [75.0, 915.0], [75.1, 916.0], [75.2, 916.0], [75.3, 919.0], [75.4, 919.0], [75.5, 920.0], [75.6, 920.0], [75.7, 923.0], [75.8, 923.0], [75.9, 926.0], [76.0, 926.0], [76.1, 929.0], [76.2, 929.0], [76.3, 932.0], [76.4, 932.0], [76.5, 942.0], [76.6, 942.0], [76.7, 946.0], [76.8, 946.0], [76.9, 950.0], [77.0, 950.0], [77.1, 952.0], [77.2, 952.0], [77.3, 954.0], [77.4, 954.0], [77.5, 958.0], [77.6, 958.0], [77.7, 959.0], [77.8, 959.0], [77.9, 960.0], [78.0, 960.0], [78.1, 968.0], [78.2, 968.0], [78.3, 969.0], [78.4, 969.0], [78.5, 973.0], [78.6, 973.0], [78.7, 984.0], [78.8, 984.0], [78.9, 984.0], [79.0, 984.0], [79.1, 986.0], [79.2, 986.0], [79.3, 986.0], [79.4, 986.0], [79.5, 994.0], [79.6, 994.0], [79.7, 1000.0], [79.8, 1000.0], [79.9, 1004.0], [80.0, 1004.0], [80.1, 1006.0], [80.2, 1006.0], [80.3, 1015.0], [80.4, 1015.0], [80.5, 1024.0], [80.6, 1024.0], [80.7, 1031.0], [80.8, 1031.0], [80.9, 1036.0], [81.0, 1036.0], [81.1, 1048.0], [81.2, 1048.0], [81.3, 1054.0], [81.4, 1054.0], [81.5, 1059.0], [81.6, 1059.0], [81.7, 1080.0], [81.8, 1080.0], [81.9, 1106.0], [82.0, 1106.0], [82.1, 1106.0], [82.2, 1106.0], [82.3, 1115.0], [82.4, 1115.0], [82.5, 1124.0], [82.6, 1124.0], [82.7, 1125.0], [82.8, 1125.0], [82.9, 1141.0], [83.0, 1141.0], [83.1, 1158.0], [83.2, 1158.0], [83.3, 1165.0], [83.4, 1165.0], [83.5, 1182.0], [83.6, 1182.0], [83.7, 1190.0], [83.8, 1190.0], [83.9, 1190.0], [84.0, 1190.0], [84.1, 1203.0], [84.2, 1203.0], [84.3, 1211.0], [84.4, 1211.0], [84.5, 1224.0], [84.6, 1224.0], [84.7, 1238.0], [84.8, 1238.0], [84.9, 1249.0], [85.0, 1249.0], [85.1, 1249.0], [85.2, 1249.0], [85.3, 1249.0], [85.4, 1249.0], [85.5, 1249.0], [85.6, 1249.0], [85.7, 1269.0], [85.8, 1269.0], [85.9, 1291.0], [86.0, 1291.0], [86.1, 1298.0], [86.2, 1298.0], [86.3, 1311.0], [86.4, 1311.0], [86.5, 1313.0], [86.6, 1313.0], [86.7, 1317.0], [86.8, 1317.0], [86.9, 1320.0], [87.0, 1320.0], [87.1, 1323.0], [87.2, 1323.0], [87.3, 1323.0], [87.4, 1323.0], [87.5, 1331.0], [87.6, 1331.0], [87.7, 1335.0], [87.8, 1335.0], [87.9, 1336.0], [88.0, 1336.0], [88.1, 1341.0], [88.2, 1341.0], [88.3, 1350.0], [88.4, 1350.0], [88.5, 1350.0], [88.6, 1350.0], [88.7, 1363.0], [88.8, 1363.0], [88.9, 1380.0], [89.0, 1380.0], [89.1, 1385.0], [89.2, 1385.0], [89.3, 1400.0], [89.4, 1400.0], [89.5, 1403.0], [89.6, 1403.0], [89.7, 1426.0], [89.8, 1426.0], [89.9, 1445.0], [90.0, 1445.0], [90.1, 1450.0], [90.2, 1450.0], [90.3, 1454.0], [90.4, 1454.0], [90.5, 1458.0], [90.6, 1458.0], [90.7, 1465.0], [90.8, 1465.0], [90.9, 1471.0], [91.0, 1471.0], [91.1, 1475.0], [91.2, 1475.0], [91.3, 1478.0], [91.4, 1478.0], [91.5, 1488.0], [91.6, 1488.0], [91.7, 1500.0], [91.8, 1500.0], [91.9, 1501.0], [92.0, 1501.0], [92.1, 1502.0], [92.2, 1502.0], [92.3, 1506.0], [92.4, 1506.0], [92.5, 1543.0], [92.6, 1543.0], [92.7, 1548.0], [92.8, 1548.0], [92.9, 1567.0], [93.0, 1567.0], [93.1, 1609.0], [93.2, 1609.0], [93.3, 1622.0], [93.4, 1622.0], [93.5, 1626.0], [93.6, 1626.0], [93.7, 1631.0], [93.8, 1631.0], [93.9, 1699.0], [94.0, 1699.0], [94.1, 1700.0], [94.2, 1700.0], [94.3, 1739.0], [94.4, 1739.0], [94.5, 1750.0], [94.6, 1750.0], [94.7, 1751.0], [94.8, 1751.0], [94.9, 1754.0], [95.0, 1754.0], [95.1, 1799.0], [95.2, 1799.0], [95.3, 1810.0], [95.4, 1810.0], [95.5, 1833.0], [95.6, 1833.0], [95.7, 1842.0], [95.8, 1842.0], [95.9, 1845.0], [96.0, 1845.0], [96.1, 1863.0], [96.2, 1863.0], [96.3, 1888.0], [96.4, 1888.0], [96.5, 1959.0], [96.6, 1959.0], [96.7, 2000.0], [96.8, 2000.0], [96.9, 2006.0], [97.0, 2006.0], [97.1, 2056.0], [97.2, 2056.0], [97.3, 2076.0], [97.4, 2076.0], [97.5, 2161.0], [97.6, 2161.0], [97.7, 2163.0], [97.8, 2163.0], [97.9, 2172.0], [98.0, 2172.0], [98.1, 2318.0], [98.2, 2318.0], [98.3, 2391.0], [98.4, 2391.0], [98.5, 2416.0], [98.6, 2416.0], [98.7, 2418.0], [98.8, 2418.0], [98.9, 2466.0], [99.0, 2466.0], [99.1, 2491.0], [99.2, 2491.0], [99.3, 2499.0], [99.4, 2499.0], [99.5, 2593.0], [99.6, 2593.0], [99.7, 2781.0], [99.8, 2781.0], [99.9, 3168.0], [100.0, 3168.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 107.0, "series": [{"data": [[600.0, 37.0], [700.0, 42.0], [800.0, 32.0], [900.0, 27.0], [1000.0, 11.0], [1100.0, 11.0], [1200.0, 11.0], [1300.0, 15.0], [1400.0, 12.0], [1500.0, 7.0], [1600.0, 5.0], [1700.0, 6.0], [1800.0, 6.0], [1900.0, 1.0], [2000.0, 4.0], [2100.0, 3.0], [2300.0, 2.0], [2400.0, 5.0], [2500.0, 1.0], [2700.0, 1.0], [3100.0, 1.0], [200.0, 9.0], [300.0, 95.0], [400.0, 107.0], [500.0, 49.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 240.0, "series": [{"data": [[0.0, 214.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 240.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 6.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 6.616666666666667, "minX": 1.7383503E12, "maxY": 7.00526315789474, "series": [{"data": [[1.7383503E12, 7.00526315789474], [1.73835036E12, 6.616666666666667]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73835036E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 488.2692307692308, "minX": 1.0, "maxY": 2466.0, "series": [{"data": [[8.0, 945.6212121212121], [2.0, 2466.0], [9.0, 800.1395348837209], [10.0, 857.1578947368421], [11.0, 1096.2105263157896], [12.0, 1536.8], [3.0, 666.25], [13.0, 1210.0], [4.0, 488.2692307692308], [1.0, 791.0], [5.0, 592.8309859154928], [6.0, 648.1048387096773], [7.0, 772.5169491525426]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[6.9140000000000015, 754.9499999999994]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 13.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 232.0, "minX": 1.7383503E12, "maxY": 3075.8, "series": [{"data": [[1.7383503E12, 3075.8], [1.73835036E12, 978.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7383503E12, 734.6666666666666], [1.73835036E12, 232.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73835036E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 748.133333333333, "minX": 1.7383503E12, "maxY": 757.1026315789468, "series": [{"data": [[1.7383503E12, 757.1026315789468], [1.73835036E12, 748.133333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73835036E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 747.8166666666667, "minX": 1.7383503E12, "maxY": 756.9447368421058, "series": [{"data": [[1.7383503E12, 756.9447368421058], [1.73835036E12, 747.8166666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73835036E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 207.10000000000005, "minX": 1.7383503E12, "maxY": 229.97368421052633, "series": [{"data": [[1.7383503E12, 229.97368421052633], [1.73835036E12, 207.10000000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73835036E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 294.0, "minX": 1.7383503E12, "maxY": 3168.0, "series": [{"data": [[1.7383503E12, 3168.0], [1.73835036E12, 2491.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7383503E12, 294.0], [1.73835036E12, 296.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7383503E12, 1435.5], [1.73835036E12, 1457.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7383503E12, 2522.5], [1.73835036E12, 2485.75]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7383503E12, 565.0], [1.73835036E12, 590.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7383503E12, 1835.25], [1.73835036E12, 1630.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73835036E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 374.0, "minX": 1.0, "maxY": 1251.0, "series": [{"data": [[4.0, 921.5], [8.0, 498.0], [1.0, 791.0], [9.0, 686.5], [10.0, 619.5], [5.0, 410.5], [11.0, 539.5], [6.0, 591.5], [12.0, 628.5], [13.0, 574.5], [7.0, 560.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 1251.0], [8.0, 751.0], [9.0, 374.0], [10.0, 776.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 374.0, "minX": 1.0, "maxY": 1251.0, "series": [{"data": [[4.0, 921.5], [8.0, 498.0], [1.0, 791.0], [9.0, 686.5], [10.0, 619.5], [5.0, 410.5], [11.0, 539.5], [6.0, 590.0], [12.0, 628.5], [13.0, 574.5], [7.0, 559.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 1251.0], [8.0, 751.0], [9.0, 374.0], [10.0, 776.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.7383503E12, "maxY": 6.466666666666667, "series": [{"data": [[1.7383503E12, 6.466666666666667], [1.73835036E12, 1.8666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73835036E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.7383503E12, "maxY": 6.233333333333333, "series": [{"data": [[1.7383503E12, 6.233333333333333], [1.73835036E12, 2.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7383503E12, 0.1]], "isOverall": false, "label": "502", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73835036E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.7383503E12, "maxY": 6.233333333333333, "series": [{"data": [[1.7383503E12, 6.233333333333333], [1.73835036E12, 2.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.7383503E12, 0.1]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73835036E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.7383503E12, "maxY": 6.233333333333333, "series": [{"data": [[1.7383503E12, 6.233333333333333], [1.73835036E12, 2.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7383503E12, 0.1]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73835036E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

