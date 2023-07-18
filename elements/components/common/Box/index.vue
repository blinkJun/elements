<template>
    <div class="data-box">
        <Transition name="fade">
            <div v-if="loading" class="loading-wrap">
                <div class="loading"></div>
            </div>
        </Transition>
        <template v-if="error">
            <div class="error-wrap">
                <svg
                    v-if="showErrorIllustrations"
                    id="error"
                    node-id="1"
                    sillyvg="true"
                    version="1.1"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    <defs node-id="54">
                        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" node-id="2" spreadMethod="pad" x1="842.4492" x2="842.4492" y1="569.0156" y2="501.1211">
                            <stop offset="0.1626" stop-color="#ffffff" stop-opacity="0.5"></stop>
                            <stop offset="1" stop-color="#c6c6c6" stop-opacity="0.8"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" node-id="6" spreadMethod="pad" x1="199.46" x2="199.46" y1="555.7715" y2="501.1211">
                            <stop offset="0.1626" stop-color="#ffffff" stop-opacity="0.5"></stop>
                            <stop offset="1" stop-color="#c6c6c6" stop-opacity="0.8"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" node-id="10" spreadMethod="pad" x1="496.9082" x2="496.9082" y1="738.9521" y2="543.9521">
                            <stop offset="0.1626" stop-color="#ffffff" stop-opacity="0.5"></stop>
                            <stop offset="1" stop-color="#c6c6c6" stop-opacity="0.8"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" node-id="14" spreadMethod="pad" x1="257.8799" x2="257.8799" y1="509.9326" y2="585.3467">
                            <stop offset="0.1626" stop-color="#f1f0f5"></stop>
                            <stop offset="1" stop-color="#c5c9d2"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" node-id="19" spreadMethod="pad" x1="773.8359" x2="773.8359" y1="525.2637" y2="600.6777">
                            <stop offset="0.1626" stop-color="#f1f0f5"></stop>
                            <stop offset="1" stop-color="#c5c9d2"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" node-id="24" spreadMethod="pad" x1="189.4463" x2="189.4463" y1="579.7588" y2="619.2432">
                            <stop offset="0.1626" stop-color="#f1f0f5"></stop>
                            <stop offset="1" stop-color="#c5c9d2"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" node-id="29" spreadMethod="pad" x1="594.9531" x2="594.9531" y1="425.6064" y2="285.4746">
                            <stop offset="0.1626" stop-color="#ffffff" stop-opacity="0.5"></stop>
                            <stop offset="1" stop-color="#c6c6c6" stop-opacity="0.8"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" node-id="33" spreadMethod="pad" x1="424.7295" x2="424.7295" y1="415.8164" y2="355.541">
                            <stop offset="0.1626" stop-color="#ffffff" stop-opacity="0.5"></stop>
                            <stop offset="1" stop-color="#c6c6c6" stop-opacity="0.8"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" node-id="42" spreadMethod="pad" x1="435.7295" x2="595.3965" y1="516.5996" y2="516.5996">
                            <stop offset="0.1626" stop-color="#f2f2f2"></stop>
                            <stop offset="1" stop-color="#c6c6c6"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M 884.50 535.07 L 875.13 535.07 C 875.13 516.32 859.94 501.12 841.19 501.12 C 822.44 501.12 807.24 516.32 807.24 535.07 L 800.40 535.07 C 791.77 535.07 784.78 542.67 784.78 552.04 C 784.78 561.42 791.77 569.02 800.40 569.02 L 884.50 569.02 C 893.13 569.02 900.12 561.42 900.12 552.04 C 900.12 542.67 893.13 535.07 884.50 535.07 Z"
                        fill="url(#SVGID_1_)"
                        fill-rule="nonzero"
                        node-id="113"
                        stroke="none"
                        target-height="67.900024"
                        target-width="115.339966"
                        target-x="784.78"
                        target-y="501.12"
                    ></path>
                    <path
                        d="M 233.31 528.45 L 225.77 528.45 C 225.77 513.36 213.54 501.12 198.44 501.12 C 183.35 501.12 171.12 513.36 171.12 528.45 L 165.61 528.45 C 158.67 528.45 153.04 534.56 153.04 542.11 C 153.04 549.65 158.67 555.77 165.61 555.77 L 233.31 555.77 C 240.25 555.77 245.88 549.65 245.88 542.11 C 245.88 534.56 240.25 528.45 233.31 528.45 Z"
                        fill="url(#SVGID_2_)"
                        fill-rule="nonzero"
                        node-id="115"
                        stroke="none"
                        target-height="54.650024"
                        target-width="92.84001"
                        target-x="153.04"
                        target-y="501.12"
                    ></path>
                    <path
                        d="M 496.91 543.95 C 290.91 543.95 123.91 631.26 123.91 738.95 L 869.91 738.95 C 869.91 631.26 702.91 543.95 496.91 543.95 Z"
                        fill="url(#SVGID_3_)"
                        fill-rule="nonzero"
                        node-id="117"
                        stroke="none"
                        target-height="195"
                        target-width="746"
                        target-x="123.91"
                        target-y="543.95"
                    ></path>
                    <path
                        d="M 292.89 547.22 C 293.80 544.44 294.29 541.48 294.29 538.39 C 294.29 522.67 281.55 509.93 265.84 509.93 C 250.57 509.93 238.12 521.95 237.41 537.04 C 225.97 538.12 217.01 547.86 217.01 559.72 C 217.01 572.31 227.10 582.51 239.55 582.51 C 246.52 582.51 252.75 579.31 256.88 574.28 C 260.83 580.91 268.01 585.35 276.21 585.35 C 288.66 585.35 298.75 575.14 298.75 562.56 C 298.75 556.65 296.53 551.27 292.89 547.22 Z"
                        fill="url(#SVGID_4_)"
                        fill-rule="nonzero"
                        node-id="119"
                        stroke="none"
                        target-height="75.41998"
                        target-width="81.740005"
                        target-x="217.01"
                        target-y="509.93"
                    ></path>
                    <path
                        d="M 272.63 563.47 L 270.03 560.88 L 259.67 571.24 L 259.67 555.43 L 254.34 555.43 L 254.34 571.99 L 248.47 566.13 L 245.88 568.72 L 254.34 577.18 L 254.34 630.10 L 259.67 630.10 L 259.67 576.42 Z"
                        fill="#7f7f7f"
                        fill-rule="nonzero"
                        node-id="121"
                        stroke="none"
                        target-height="74.66998"
                        target-width="26.75"
                        target-x="245.88"
                        target-y="555.43"
                    ></path>
                    <path
                        d="M 808.85 562.55 C 809.75 559.77 810.25 556.81 810.25 553.72 C 810.25 538.00 797.51 525.26 781.79 525.26 C 766.53 525.26 754.08 537.28 753.37 552.37 C 741.92 553.46 732.96 563.20 732.96 575.05 C 732.96 587.64 743.05 597.85 755.50 597.85 C 762.48 597.85 768.71 594.64 772.84 589.62 C 776.78 596.24 783.96 600.68 792.17 600.68 C 804.62 600.68 814.71 590.48 814.71 577.89 C 814.71 571.98 812.49 566.60 808.85 562.55 Z"
                        fill="url(#SVGID_5_)"
                        fill-rule="nonzero"
                        node-id="123"
                        stroke="none"
                        target-height="75.41998"
                        target-width="81.75"
                        target-x="732.96"
                        target-y="525.26"
                    ></path>
                    <path
                        d="M 788.58 578.80 L 785.99 576.21 L 775.63 586.57 L 775.63 570.76 L 770.30 570.76 L 770.30 587.32 L 764.43 581.46 L 761.84 584.05 L 770.30 592.51 L 770.30 645.43 L 775.63 645.43 L 775.63 591.76 Z"
                        fill="#7f7f7f"
                        fill-rule="nonzero"
                        node-id="125"
                        stroke="none"
                        target-height="74.66998"
                        target-width="26.73999"
                        target-x="761.84"
                        target-y="570.76"
                    ></path>
                    <path
                        d="M 207.78 599.28 C 208.25 597.83 208.51 596.27 208.51 594.66 C 208.51 586.43 201.84 579.76 193.61 579.76 C 185.62 579.76 179.10 586.05 178.73 593.95 C 172.74 594.52 168.04 599.62 168.04 605.83 C 168.04 612.42 173.33 617.76 179.85 617.76 C 183.50 617.76 186.76 616.08 188.93 613.45 C 190.99 616.92 194.75 619.24 199.04 619.24 C 205.56 619.24 210.85 613.90 210.85 607.31 C 210.85 604.22 209.68 601.40 207.78 599.28 Z"
                        fill="url(#SVGID_6_)"
                        fill-rule="nonzero"
                        node-id="127"
                        stroke="none"
                        target-height="39.47998"
                        target-width="42.810013"
                        target-x="168.04"
                        target-y="579.76"
                    ></path>
                    <path
                        d="M 197.17 607.79 L 195.81 606.43 L 190.38 611.86 L 190.38 603.58 L 187.59 603.58 L 187.59 612.25 L 184.52 609.18 L 183.16 610.54 L 187.59 614.97 L 187.59 642.67 L 190.38 642.67 L 190.38 614.57 Z"
                        fill="#7f7f7f"
                        fill-rule="nonzero"
                        node-id="129"
                        stroke="none"
                        target-height="39.089966"
                        target-width="14.0099945"
                        target-x="183.16"
                        target-y="603.58"
                    ></path>
                    <path
                        d="M 681.74 355.54 L 662.41 355.54 C 662.41 316.84 631.04 285.48 592.35 285.48 C 553.65 285.48 522.28 316.84 522.28 355.54 L 508.16 355.54 C 490.36 355.54 475.93 371.23 475.93 390.57 C 475.93 409.92 490.36 425.61 508.16 425.61 L 681.75 425.61 C 699.55 425.61 713.98 409.92 713.98 390.57 C 713.98 371.23 699.55 355.54 681.74 355.54 Z"
                        fill="url(#SVGID_7_)"
                        fill-rule="nonzero"
                        node-id="131"
                        stroke="none"
                        target-height="140.12997"
                        target-width="238.04999"
                        target-x="475.93"
                        target-y="285.48"
                    ></path>
                    <path
                        d="M 462.06 385.68 L 453.75 385.68 C 453.75 369.03 440.25 355.54 423.61 355.54 C 406.96 355.54 393.47 369.03 393.47 385.68 L 387.40 385.68 C 379.74 385.68 373.53 392.43 373.53 400.75 C 373.53 409.07 379.74 415.82 387.40 415.82 L 462.06 415.82 C 469.72 415.82 475.93 409.07 475.93 400.75 C 475.93 392.43 469.72 385.68 462.06 385.68 Z"
                        fill="url(#SVGID_8_)"
                        fill-rule="nonzero"
                        node-id="133"
                        stroke="none"
                        target-height="60.28"
                        target-width="102.399994"
                        target-x="373.53"
                        target-y="355.54"
                    ></path>
                    <path
                        d="M 306.77 408.96 C 304.49 416.62 296.02 420.87 296.02 420.87 C 296.02 420.87 291.25 412.69 293.54 405.02 C 295.82 397.36 304.28 393.11 304.28 393.11 C 304.28 393.11 309.05 401.29 306.77 408.96 Z"
                        fill="#d6d6d6"
                        fill-rule="nonzero"
                        node-id="135"
                        stroke="none"
                        target-height="27.76001"
                        target-width="17.799988"
                        target-x="291.25"
                        target-y="393.11"
                    ></path>
                    <path
                        d="M 724.83 475.30 C 722.55 482.97 714.09 487.22 714.09 487.22 C 714.09 487.22 709.32 479.03 711.60 471.37 C 713.88 463.70 722.34 459.45 722.34 459.45 C 722.34 459.45 727.11 467.64 724.83 475.30 Z"
                        fill="#d6d6d6"
                        fill-rule="nonzero"
                        node-id="137"
                        stroke="none"
                        target-height="27.769989"
                        target-width="17.789978"
                        target-x="709.32"
                        target-y="459.45"
                    ></path>
                    <path
                        d="M 688.24 648.20 C 681.21 652.01 672.22 649.03 672.22 649.03 C 672.22 649.03 674.63 639.87 681.66 636.06 C 688.70 632.25 697.69 635.23 697.69 635.23 C 697.69 635.23 695.27 644.39 688.24 648.20 Z"
                        fill="#d6d6d6"
                        fill-rule="nonzero"
                        node-id="139"
                        stroke="none"
                        target-height="19.76001"
                        target-width="25.470032"
                        target-x="672.22"
                        target-y="632.25"
                    ></path>
                    <path
                        d="M 261.98 435.42 C 260.56 440.17 255.32 442.80 255.32 442.80 C 255.32 442.80 252.37 437.73 253.78 432.98 C 255.20 428.24 260.44 425.61 260.44 425.61 C 260.44 425.61 263.39 430.67 261.98 435.42 Z"
                        fill="#d6d6d6"
                        fill-rule="nonzero"
                        node-id="141"
                        stroke="none"
                        target-height="17.190002"
                        target-width="11.02002"
                        target-x="252.37"
                        target-y="425.61"
                    ></path>
                    <path
                        d="M 584.40 620.77 C 584.40 623.53 582.16 625.77 579.40 625.77 L 429.73 625.77 C 426.97 625.77 424.73 623.53 424.73 620.77 L 424.73 412.43 C 424.73 409.67 426.97 407.43 429.73 407.43 L 579.40 407.43 C 582.16 407.43 584.40 409.67 584.40 412.43 L 584.40 620.77 Z"
                        fill="#c1c1c1"
                        fill-rule="nonzero"
                        node-id="143"
                        stroke="none"
                        target-height="218.34003"
                        target-width="159.67001"
                        target-x="424.73"
                        target-y="407.43"
                    ></path>
                    <path
                        d="M 595.40 620.77 C 595.40 623.53 593.16 625.77 590.40 625.77 L 440.73 625.77 C 437.97 625.77 435.73 623.53 435.73 620.77 L 435.73 412.43 C 435.73 409.67 437.97 407.43 440.73 407.43 L 590.40 407.43 C 593.16 407.43 595.40 409.67 595.40 412.43 L 595.40 620.77 Z"
                        fill="url(#SVGID_9_)"
                        fill-rule="nonzero"
                        node-id="145"
                        stroke="none"
                        target-height="218.34003"
                        target-width="159.67001"
                        target-x="435.73"
                        target-y="407.43"
                    ></path>
                    <path
                        d="M 558.98 410.60 C 558.98 415.02 555.15 418.60 550.43 418.60 L 486.36 418.60 C 481.64 418.60 477.81 415.02 477.81 410.60 L 477.81 410.60 C 477.81 406.18 481.64 402.60 486.36 402.60 L 550.43 402.60 C 555.15 402.60 558.98 406.18 558.98 410.60 L 558.98 410.60 Z"
                        fill="#d8d8d8"
                        fill-rule="nonzero"
                        node-id="147"
                        stroke="none"
                        target-height="16"
                        target-width="81.16998"
                        target-x="477.81"
                        target-y="402.6"
                    ></path>
                    <path
                        d="M 547.15 400.77 C 547.15 404.45 544.44 407.43 541.09 407.43 L 495.70 407.43 C 492.36 407.43 489.65 404.45 489.65 400.77 L 489.65 400.77 C 489.65 397.09 492.36 394.10 495.70 394.10 L 541.09 394.10 C 544.44 394.10 547.15 397.09 547.15 400.77 L 547.15 400.77 Z"
                        fill="#d8d8d8"
                        fill-rule="nonzero"
                        node-id="149"
                        stroke="none"
                        target-height="13.329987"
                        target-width="57.50003"
                        target-x="489.65"
                        target-y="394.1"
                    ></path>
                    <path
                        d="M 522.23 473.60 C 522.23 477.46 519.50 480.60 516.12 480.60 L 470.34 480.60 C 466.96 480.60 464.23 477.46 464.23 473.60 L 464.23 473.60 C 464.23 469.73 466.96 466.60 470.34 466.60 L 516.12 466.60 C 519.50 466.60 522.23 469.73 522.23 473.60 L 522.23 473.60 Z"
                        fill="#ffffff"
                        fill-rule="nonzero"
                        node-id="151"
                        stroke="none"
                        target-height="14"
                        target-width="57.99997"
                        target-x="464.23"
                        target-y="466.6"
                    ></path>
                    <path
                        d="M 562.23 507.94 C 562.23 511.80 559.10 514.94 555.23 514.94 L 471.23 514.94 C 467.36 514.94 464.23 511.80 464.23 507.94 L 464.23 507.94 C 464.23 504.07 467.36 500.94 471.23 500.94 L 555.23 500.94 C 559.10 500.94 562.23 504.07 562.23 507.94 L 562.23 507.94 Z"
                        fill="#ffffff"
                        fill-rule="nonzero"
                        node-id="153"
                        stroke="none"
                        target-height="14"
                        target-width="97.99997"
                        target-x="464.23"
                        target-y="500.94"
                    ></path>
                    <path
                        d="M 562.23 538.94 C 562.23 542.80 559.10 545.94 555.23 545.94 L 471.23 545.94 C 467.36 545.94 464.23 542.80 464.23 538.94 L 464.23 538.94 C 464.23 535.07 467.36 531.94 471.23 531.94 L 555.23 531.94 C 559.10 531.94 562.23 535.07 562.23 538.94 L 562.23 538.94 Z"
                        fill="#ffffff"
                        fill-rule="nonzero"
                        node-id="155"
                        stroke="none"
                        target-height="14"
                        target-width="97.99997"
                        target-x="464.23"
                        target-y="531.94"
                    ></path>
                    <path
                        d="M 556.05 479.50 C 557.89 481.35 558.17 484.07 556.66 485.57 L 556.66 485.57 C 555.15 487.08 552.43 486.81 550.59 484.96 L 533.53 467.91 C 531.69 466.06 531.41 463.34 532.92 461.83 L 532.92 461.83 C 534.43 460.33 537.14 460.60 538.99 462.45 L 556.05 479.50 Z"
                        fill="#ffffff"
                        fill-rule="nonzero"
                        node-id="157"
                        stroke="none"
                        target-height="26.75"
                        target-width="26.76001"
                        target-x="531.41"
                        target-y="460.33"
                    ></path>
                    <path
                        d="M 538.99 484.96 C 537.14 486.81 534.43 487.08 532.92 485.57 L 532.92 485.57 C 531.41 484.07 531.69 481.35 533.53 479.50 L 550.59 462.45 C 552.44 460.60 555.15 460.33 556.66 461.83 L 556.66 461.83 C 558.17 463.34 557.89 466.06 556.05 467.91 L 538.99 484.96 Z"
                        fill="#ffffff"
                        fill-rule="nonzero"
                        node-id="159"
                        stroke="none"
                        target-height="26.75"
                        target-width="26.76001"
                        target-x="531.41"
                        target-y="460.33"
                    ></path>
                </svg>
                <span class="error-label"> {{ errorLabel }}</span>
            </div>
        </template>
        <template v-else-if="noData">
            <div class="no-data-wrap">
                <svg
                    v-if="showNoDataIllustrations"
                    id="no-data"
                    node-id="1"
                    sillyvg="true"
                    version="1.1"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    <defs node-id="69">
                        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" node-id="2" spreadMethod="pad" x1="841.8789" x2="841.8789" y1="568.6563" y2="500.7607">
                            <stop offset="0.1626" stop-color="#ffffff" stop-opacity="0.5"></stop>
                            <stop offset="1" stop-color="#c6c6c6" stop-opacity="0.8"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" node-id="6" spreadMethod="pad" x1="198.8906" x2="198.8906" y1="555.4121" y2="500.7612">
                            <stop offset="0.1626" stop-color="#ffffff" stop-opacity="0.5"></stop>
                            <stop offset="1" stop-color="#c6c6c6" stop-opacity="0.8"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" node-id="10" spreadMethod="pad" x1="496.3379" x2="496.3379" y1="738.5928" y2="543.5928">
                            <stop offset="0.1626" stop-color="#ffffff" stop-opacity="0.5"></stop>
                            <stop offset="1" stop-color="#c6c6c6" stop-opacity="0.8"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" node-id="14" spreadMethod="pad" x1="257.3086" x2="257.3086" y1="509.5732" y2="584.9868">
                            <stop offset="0.1626" stop-color="#f1f0f5"></stop>
                            <stop offset="1" stop-color="#c5c9d2"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" node-id="19" spreadMethod="pad" x1="773.2656" x2="773.2656" y1="524.9043" y2="600.3179">
                            <stop offset="0.1626" stop-color="#f1f0f5"></stop>
                            <stop offset="1" stop-color="#c5c9d2"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" node-id="24" spreadMethod="pad" x1="188.876" x2="188.876" y1="579.3994" y2="618.8838">
                            <stop offset="0.1626" stop-color="#f1f0f5"></stop>
                            <stop offset="1" stop-color="#c5c9d2"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" node-id="29" spreadMethod="pad" x1="594.3828" x2="594.3828" y1="425.2471" y2="285.1152">
                            <stop offset="0.1626" stop-color="#ffffff" stop-opacity="0.5"></stop>
                            <stop offset="1" stop-color="#c6c6c6" stop-opacity="0.8"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" node-id="33" spreadMethod="pad" x1="424.1592" x2="424.1592" y1="415.4575" y2="355.1812">
                            <stop offset="0.1626" stop-color="#ffffff" stop-opacity="0.5"></stop>
                            <stop offset="1" stop-color="#c6c6c6" stop-opacity="0.8"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" node-id="50" spreadMethod="pad" x1="416.1885" x2="416.1885" y1="423.5098" y2="618.8403">
                            <stop offset="0.1626" stop-color="#dddddd"></stop>
                            <stop offset="1" stop-color="#c6c6c6"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" node-id="54" spreadMethod="pad" x1="628.001" x2="628.001" y1="423.5098" y2="618.8403">
                            <stop offset="0.1626" stop-color="#dddddd"></stop>
                            <stop offset="1" stop-color="#c6c6c6"></stop>
                        </linearGradient>
                        <linearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" node-id="59" spreadMethod="pad" x1="521.751" x2="521.751" y1="508.2998" y2="626.2993">
                            <stop offset="0.1626" stop-color="#dddddd"></stop>
                            <stop offset="1" stop-color="#c6c6c6"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M 883.93 534.71 L 874.56 534.71 C 874.56 515.96 859.37 500.76 840.62 500.76 C 821.87 500.76 806.67 515.96 806.67 534.71 L 799.83 534.71 C 791.20 534.71 784.21 542.31 784.21 551.68 C 784.21 561.06 791.20 568.66 799.83 568.66 L 883.93 568.66 C 892.56 568.66 899.55 561.06 899.55 551.68 C 899.55 542.31 892.56 534.71 883.93 534.71 Z"
                        fill="url(#SVGID_1_)"
                        fill-rule="nonzero"
                        node-id="140"
                        stroke="none"
                        target-height="67.89996"
                        target-width="115.339966"
                        target-x="784.21"
                        target-y="500.76"
                    ></path>
                    <path
                        d="M 232.74 528.09 L 225.20 528.09 C 225.20 513.00 212.97 500.76 197.87 500.76 C 182.78 500.76 170.55 513.00 170.55 528.09 L 165.04 528.09 C 158.10 528.09 152.47 534.20 152.47 541.75 C 152.47 549.29 158.10 555.41 165.04 555.41 L 232.74 555.41 C 239.68 555.41 245.31 549.29 245.31 541.75 C 245.31 534.20 239.68 528.09 232.74 528.09 Z"
                        fill="url(#SVGID_2_)"
                        fill-rule="nonzero"
                        node-id="142"
                        stroke="none"
                        target-height="54.649963"
                        target-width="92.84"
                        target-x="152.47"
                        target-y="500.76"
                    ></path>
                    <path
                        d="M 496.34 543.59 C 290.34 543.59 123.34 630.90 123.34 738.59 L 869.34 738.59 C 869.34 630.90 702.34 543.59 496.34 543.59 Z"
                        fill="url(#SVGID_3_)"
                        fill-rule="nonzero"
                        node-id="144"
                        stroke="none"
                        target-height="195"
                        target-width="746"
                        target-x="123.34"
                        target-y="543.59"
                    ></path>
                    <path
                        d="M 292.32 546.86 C 293.23 544.08 293.72 541.12 293.72 538.03 C 293.72 522.31 280.98 509.57 265.27 509.57 C 250.00 509.57 237.55 521.59 236.84 536.68 C 225.39 537.76 216.44 547.50 216.44 559.36 C 216.44 571.95 226.53 582.15 238.98 582.15 C 245.95 582.15 252.18 578.95 256.31 573.92 C 260.25 580.55 267.44 584.99 275.64 584.99 C 288.09 584.99 298.18 574.78 298.18 562.20 C 298.18 556.29 295.96 550.91 292.32 546.86 Z"
                        fill="url(#SVGID_4_)"
                        fill-rule="nonzero"
                        node-id="146"
                        stroke="none"
                        target-height="75.41998"
                        target-width="81.73999"
                        target-x="216.44"
                        target-y="509.57"
                    ></path>
                    <path
                        d="M 272.06 563.11 L 269.46 560.52 L 259.10 570.88 L 259.10 555.07 L 253.77 555.07 L 253.77 571.63 L 247.90 565.77 L 245.31 568.36 L 253.77 576.82 L 253.77 629.74 L 259.10 629.74 L 259.10 576.07 Z"
                        fill="#7f7f7f"
                        fill-rule="nonzero"
                        node-id="148"
                        stroke="none"
                        target-height="74.66998"
                        target-width="26.75"
                        target-x="245.31"
                        target-y="555.07"
                    ></path>
                    <path
                        d="M 808.27 562.20 C 809.18 559.41 809.68 556.45 809.68 553.36 C 809.68 537.64 796.94 524.90 781.22 524.90 C 765.96 524.90 753.51 536.92 752.80 552.01 C 741.35 553.10 732.39 562.84 732.39 574.70 C 732.39 587.28 742.48 597.49 754.93 597.49 C 761.90 597.49 768.13 594.28 772.27 589.26 C 776.21 595.88 783.39 600.32 791.60 600.32 C 804.05 600.32 814.14 590.12 814.14 577.53 C 814.14 571.62 811.92 566.24 808.27 562.20 Z"
                        fill="url(#SVGID_5_)"
                        fill-rule="nonzero"
                        node-id="150"
                        stroke="none"
                        target-height="75.41998"
                        target-width="81.75"
                        target-x="732.39"
                        target-y="524.9"
                    ></path>
                    <path
                        d="M 788.01 578.44 L 785.42 575.85 L 775.06 586.21 L 775.06 570.40 L 769.73 570.40 L 769.73 586.97 L 763.86 581.10 L 761.27 583.69 L 769.73 592.15 L 769.73 645.07 L 775.06 645.07 L 775.06 591.40 Z"
                        fill="#7f7f7f"
                        fill-rule="nonzero"
                        node-id="152"
                        stroke="none"
                        target-height="74.66998"
                        target-width="26.73999"
                        target-x="761.27"
                        target-y="570.4"
                    ></path>
                    <path
                        d="M 207.21 598.92 C 207.68 597.47 207.94 595.91 207.94 594.30 C 207.94 586.07 201.27 579.40 193.04 579.40 C 185.05 579.40 178.53 585.69 178.16 593.59 C 172.17 594.16 167.47 599.26 167.47 605.47 C 167.47 612.06 172.76 617.40 179.28 617.40 C 182.93 617.40 186.19 615.72 188.35 613.09 C 190.42 616.56 194.18 618.88 198.47 618.88 C 204.99 618.88 210.28 613.54 210.28 606.95 C 210.28 603.86 209.11 601.04 207.21 598.92 Z"
                        fill="url(#SVGID_6_)"
                        fill-rule="nonzero"
                        node-id="154"
                        stroke="none"
                        target-height="39.47998"
                        target-width="42.809998"
                        target-x="167.47"
                        target-y="579.4"
                    ></path>
                    <path
                        d="M 196.60 607.43 L 195.24 606.07 L 189.81 611.50 L 189.81 603.22 L 187.02 603.22 L 187.02 611.89 L 183.95 608.82 L 182.59 610.18 L 187.02 614.61 L 187.02 642.31 L 189.81 642.31 L 189.81 614.21 Z"
                        fill="#7f7f7f"
                        fill-rule="nonzero"
                        node-id="156"
                        stroke="none"
                        target-height="39.090027"
                        target-width="14.01001"
                        target-x="182.59"
                        target-y="603.22"
                    ></path>
                    <path
                        d="M 681.17 355.18 L 661.84 355.18 C 661.84 316.49 630.47 285.12 591.78 285.12 C 553.08 285.12 521.71 316.49 521.71 355.18 L 507.59 355.18 C 489.79 355.18 475.36 370.87 475.36 390.21 C 475.36 409.56 489.79 425.25 507.59 425.25 L 681.17 425.25 C 698.98 425.25 713.41 409.56 713.41 390.21 C 713.41 370.87 698.98 355.18 681.17 355.18 Z"
                        fill="url(#SVGID_7_)"
                        fill-rule="nonzero"
                        node-id="158"
                        stroke="none"
                        target-height="140.13"
                        target-width="238.04999"
                        target-x="475.36"
                        target-y="285.12"
                    ></path>
                    <path
                        d="M 461.49 385.32 L 453.18 385.32 C 453.18 368.67 439.68 355.18 423.04 355.18 C 406.39 355.18 392.90 368.67 392.90 385.32 L 386.83 385.32 C 379.17 385.32 372.96 392.07 372.96 400.39 C 372.96 408.71 379.17 415.46 386.83 415.46 L 461.49 415.46 C 469.15 415.46 475.36 408.71 475.36 400.39 C 475.36 392.07 469.15 385.32 461.49 385.32 Z"
                        fill="url(#SVGID_8_)"
                        fill-rule="nonzero"
                        node-id="160"
                        stroke="none"
                        target-height="60.28"
                        target-width="102.399994"
                        target-x="372.96"
                        target-y="355.18"
                    ></path>
                    <path
                        d="M 306.20 408.60 C 303.92 416.27 295.45 420.51 295.45 420.51 C 295.45 420.51 290.68 412.33 292.96 404.66 C 295.25 397.00 303.71 392.75 303.71 392.75 C 303.71 392.75 308.48 400.93 306.20 408.60 Z"
                        fill="#d6d6d6"
                        fill-rule="nonzero"
                        node-id="162"
                        stroke="none"
                        target-height="27.76001"
                        target-width="17.800018"
                        target-x="290.68"
                        target-y="392.75"
                    ></path>
                    <path
                        d="M 724.26 474.94 C 721.98 482.61 713.52 486.86 713.52 486.86 C 713.52 486.86 708.75 478.67 711.03 471.01 C 713.31 463.34 721.77 459.09 721.77 459.09 C 721.77 459.09 726.54 467.28 724.26 474.94 Z"
                        fill="#d6d6d6"
                        fill-rule="nonzero"
                        node-id="164"
                        stroke="none"
                        target-height="27.769989"
                        target-width="17.789978"
                        target-x="708.75"
                        target-y="459.09"
                    ></path>
                    <path
                        d="M 687.67 647.84 C 680.63 651.65 671.65 648.67 671.65 648.67 C 671.65 648.67 674.06 639.51 681.10 635.70 C 688.13 631.89 697.12 634.87 697.12 634.87 C 697.12 634.87 694.70 644.03 687.67 647.84 Z"
                        fill="#d6d6d6"
                        fill-rule="nonzero"
                        node-id="166"
                        stroke="none"
                        target-height="19.76001"
                        target-width="25.46997"
                        target-x="671.65"
                        target-y="631.89"
                    ></path>
                    <path
                        d="M 261.40 435.06 C 259.99 439.81 254.75 442.44 254.75 442.44 C 254.75 442.44 251.80 437.37 253.21 432.62 C 254.62 427.88 259.87 425.25 259.87 425.25 C 259.87 425.25 262.82 430.31 261.40 435.06 Z"
                        fill="#d6d6d6"
                        fill-rule="nonzero"
                        node-id="168"
                        stroke="none"
                        target-height="17.190002"
                        target-width="11.020004"
                        target-x="251.8"
                        target-y="425.25"
                    ></path>
                    <path
                        d="M 429.47 485.80 L 523.51 485.80 C 529.21 485.80 532.06 488.65 532.06 494.35 C 532.06 500.05 529.21 502.90 523.51 502.90 L 429.47 502.90 C 423.77 502.90 420.92 500.05 420.92 494.35 C 420.92 488.65 423.77 485.80 429.47 485.80 L 429.47 485.80 Z M 429.47 485.80"
                        fill="#ffffff"
                        fill-rule="nonzero"
                        node-id="170"
                        stroke="none"
                        target-height="17.100006"
                        target-width="111.139984"
                        target-x="420.92"
                        target-y="485.8"
                    ></path>
                    <path
                        d="M 429.47 528.54 L 497.86 528.54 C 503.56 528.54 506.41 531.39 506.41 537.09 C 506.41 542.79 503.56 545.64 497.86 545.64 L 429.47 545.64 C 423.77 545.64 420.92 542.79 420.92 537.09 C 420.92 531.39 423.77 528.54 429.47 528.54 L 429.47 528.54 Z M 429.47 528.54"
                        fill="#ffffff"
                        fill-rule="nonzero"
                        node-id="172"
                        stroke="none"
                        target-height="17.100037"
                        target-width="85.48999"
                        target-x="420.92"
                        target-y="528.54"
                    ></path>
                    <g node-id="209">
                        <g node-id="211">
                            <path
                                d="M 616.37 433.63 L 612.86 420.22 L 623.81 424.42 Z"
                                fill="#eaeaea"
                                fill-rule="nonzero"
                                group-id="1,3"
                                node-id="178"
                                stroke="none"
                                target-height="13.410004"
                                target-width="10.950012"
                                target-x="612.86"
                                target-y="420.22"
                            ></path>
                            <g node-id="213">
                                <path
                                    d="M 593.05 411.21 L 646.28 391.57 L 604.77 415.44 L 593.05 411.21 Z M 605.18 416.03 L 646.70 392.16 L 611.43 417.93 L 614.85 431.35 L 605.18 416.03 Z M 605.18 416.03"
                                    fill="#eaeaea"
                                    fill-rule="nonzero"
                                    group-id="1,3,5"
                                    node-id="182"
                                    stroke="none"
                                    target-height="39.78"
                                    target-width="53.650024"
                                    target-x="593.05"
                                    target-y="391.57"
                                ></path>
                                <path
                                    d="M 631.59 426.29 L 623.23 423.00 L 612.28 418.81 L 647.55 393.04 Z"
                                    fill="#eaeaea"
                                    fill-rule="nonzero"
                                    group-id="1,3,5"
                                    node-id="184"
                                    stroke="none"
                                    target-height="33.25"
                                    target-width="35.26996"
                                    target-x="612.28"
                                    target-y="393.04"
                                ></path>
                            </g>
                        </g>
                    </g>
                    <path
                        d="M 449.88 423.51 L 595.00 423.51 L 595.00 475.80 L 449.88 475.80 Z"
                        fill="#eaeaea"
                        fill-rule="nonzero"
                        node-id="189"
                        stroke="none"
                        target-height="52.289978"
                        target-width="145.12"
                        target-x="449.88"
                        target-y="423.51"
                    ></path>
                    <path
                        d="M 449.88 475.80 L 382.84 618.84 L 382.50 515.30 L 449.88 423.51 Z"
                        fill="url(#SVGID_9_)"
                        fill-rule="nonzero"
                        node-id="191"
                        stroke="none"
                        target-height="195.33002"
                        target-width="67.380005"
                        target-x="382.5"
                        target-y="423.51"
                    ></path>
                    <path
                        d="M 595.00 475.80 L 660.66 618.84 L 661.00 515.30 L 595.00 423.51 Z"
                        fill="url(#SVGID_10_)"
                        fill-rule="nonzero"
                        node-id="193"
                        stroke="none"
                        target-height="195.33002"
                        target-width="66"
                        target-x="595"
                        target-y="423.51"
                    ></path>
                    <path
                        d="M 660.66 618.84 L 382.84 618.84 L 449.88 475.80 L 595.00 475.80 Z"
                        fill="#f4f4f4"
                        fill-rule="nonzero"
                        node-id="195"
                        stroke="none"
                        target-height="143.04004"
                        target-width="277.81998"
                        target-x="382.84"
                        target-y="475.8"
                    ></path>
                    <path
                        d="M 661.00 616.30 C 661.00 621.82 656.52 626.30 651.00 626.30 L 392.50 626.30 C 386.98 626.30 382.50 621.82 382.50 616.30 L 382.50 518.30 C 382.50 512.78 386.98 508.30 392.50 508.30 L 651.00 508.30 C 656.52 508.30 661.00 512.78 661.00 518.30 L 661.00 616.30 Z"
                        fill="url(#SVGID_11_)"
                        fill-rule="nonzero"
                        node-id="197"
                        stroke="none"
                        target-height="118"
                        target-width="278.5"
                        target-x="382.5"
                        target-y="508.3"
                    ></path>
                    <path
                        d="M 564.58 488.70 C 564.58 488.70 565.13 488.16 565.88 487.18"
                        fill="none"
                        group-id="2,4"
                        node-id="203"
                        stroke="#c1c1c1"
                        stroke-linecap="round"
                        stroke-width="1"
                        target-height="1.5200195"
                        target-width="1.2999878"
                        target-x="564.58"
                        target-y="487.18"
                    ></path>
                    <path
                        d="M 567.95 483.93 C 569.64 480.68 570.98 476.02 569.16 470.83 C 569.16 470.83 562.29 461.02 559.68 472.36 C 559.68 472.36 565.28 482.49 578.55 473.01 C 578.55 473.01 585.50 464.29 586.59 452.09 C 586.59 452.09 589.59 439.67 594.30 437.82 C 594.30 437.82 598.35 435.27 603.50 434.17"
                        fill="none"
                        group-id="2,4"
                        node-id="205"
                        stroke="#c1c1c1"
                        stroke-dasharray="3.861 3.861"
                        stroke-linecap="round"
                        stroke-width="1"
                        target-height="49.75998"
                        target-width="43.820007"
                        target-x="559.68"
                        target-y="434.17"
                    ></path>
                    <path
                        d="M 605.41 433.84 C 606.07 433.75 606.73 433.70 607.40 433.68"
                        fill="none"
                        group-id="2,4"
                        node-id="207"
                        stroke="#c1c1c1"
                        stroke-linecap="round"
                        stroke-width="1"
                        target-height="0.16000366"
                        target-width="1.9900513"
                        target-x="605.41"
                        target-y="433.68"
                    ></path>
                </svg>
                <span class="no-data-label">{{ noDataLabel }}</span>
            </div>
        </template>

        <template v-else>
            <slot></slot>
        </template>
    </div>
</template>
<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps({
    loading: {
        default: false,
        type: Boolean
    },
    noData: {
        default: true,
        type: Boolean
    },
    error: {
        default: false,
        type: Boolean
    },
    noDataLabel: {
        default: '暂无数据',
        type: String
    },
    errorLabel: {
        default: '加载数据失败',
        type: String
    },
    showNoDataIllustrations: {
        default: true,
        type: Boolean
    },
    showErrorIllustrations: {
        default: true,
        type: Boolean
    }
})
const { loading, noData, error, showErrorIllustrations, showNoDataIllustrations, noDataLabel, errorLabel } = toRefs(props)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
@keyframes spin-stretch {
    50% {
        transform: rotate(360deg) scale(0.4, 0.33);
        border-width: 8px;
    }
    100% {
        transform: rotate(720deg) scale(1, 1);
        border-width: 3px;
    }
}
.data-box {
    min-width: 200px;
    min-height: 200px;
    position: relative;
}
.loading-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
}
.loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 2.5em;
    height: 3em;
    border: 3px solid transparent;
    border-top-color: #fff;
    border-bottom-color: #fff;
    border-radius: 50%;
    animation: spin-stretch 2s ease infinite;
}
.no-data-wrap,
.error-wrap {
    width: 100%;
    min-height: 100px;
    padding: 10px 0;
    overflow: hidden;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#no-data,
#error {
    margin: 0 auto;
    margin-top: -10%;
    margin-bottom: -12%;
    width: 50%;
    min-width: 150px;
}
.no-data-label,
.error-label {
    color: #999;
}
</style>
