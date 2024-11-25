// gaussian elimination variables ----------------------------------------------------------------
let mat_c = [
    7.2038, -14.165, 71.985
];
let mat_a = [
    [
        9.7800,
        75.7200,
        29.6100
    ],
    [
        67.4900,
        90.2700,
        30.2800
    ],
    [
        58.1600,
        87.4800,
        79.5100
    ]
];
//3 x 1 random numbers in [-100, 100]
function initialize_mat_c() {
    mat_c = [];
    let num1 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num2 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num3 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    mat_c.push([num1]);
    mat_c.push([num2]);
    mat_c.push([num3]);
}
//3 x 3 random numbers in [-100, 100]
function initialize_mat_a() {
    mat_a = [];
    for (let i = 0; i < 3; i++) {
        let num1 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num2 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num3 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        mat_a.push([num1, num2, num3]);
    }
    if (Math.abs(mat_a[0][0]) < 25) {
        mat_a[0][0] = 25;
    }
    mat_a[0][0] = mat_a[0][0] * 4;
}
initialize_mat_c();
initialize_mat_a();
let mat_x = [];
let mat_x1 = [];
//compare two values using absolute difference
function verify_values_abs(value, truevalue) {
    if ((truevalue == 0) && (value == truevalue)) {
        return true;
    }
    let res = false;
    res = (Math.abs(value - truevalue) < 0.001) ? true : false;
    // if(calculated_value <= 1) {
    //     return true
    // } else {
    //     return false;
    // }
    return res;
}
let tb_data = [];
let n_val;
let x1 = 0;
let xn = 0.5;
let y1 = 0;
let z1 = 0;
let x_val = [];
let y_val;
let h = 0;
let h_val = 0;
let y05 = 0;
let z05 = 0;
let act2_tb_data = [];
let act2_n_val;
let act2_x1 = 0;
let act2_xn = 0.2;
let act2_y1 = 1;
let act2_z1 = 1;
let act2_x_val = [];
let act2_y_val;
let act2_h = 0;
let act2_h_val = 0;
let act2_y02 = 0;
let act2_z02 = 0;
let act3_tb_data = [];
let act3_n_val;
let act3_x1 = 0;
let act3_xn = 0.2;
let act3_y1 = 1;
let act3_z1 = 0;
let act3_x_val = [];
let act3_y_val;
let act3_h = 0;
let act3_h_val = 0;
let act3_y02 = 0;
let act3_z02 = 0;
//# sourceMappingURL=data.js.map