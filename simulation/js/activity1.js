let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">ODE: System of ODE Runge Kutta method 4<sup>th</sup> order</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        $$ x_1 = 0, y_1 = 0, z_1 = 0  $$
        $$ \\frac{dy}{dx} = f(x, y, z) = x+z  $$
        $$ \\frac{dz}{dx} = g(x, y, z) = 1.5z - 4.5y + 4.5  $$
        $$ y(0.5) = ?  $$
        $$ z(0.5) = ?  $$
        <br>

        <div class="row">
            <div class='col-3'>
                <span>Select the value of n: </span>
            </div>
            <div class='col-2'>
                <span id="n-dsp">
                    <select id='n-inp' class='form-select fs-16px'>
                        <option value="0" selected>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="5">5</option>
                    </select>
                </span>
            </div>
            <div class='col-2'>
                <span>
                <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='calculate_hxy();' id='temp-btn-2' >Next</button>
                </span>
            </div>
        </div>

        <div id="h-div-act1" style="display:none; margin-top: 2%">
            <div class="row">
                <div class='col-3'>
                    <span>Calculate the value of h: </span>
                </div>
                <div class='col-2'>
                    <span id="h-dsp"><input type='number' id='h-inp' class='form-control fs-16px' /></span>
                </div>
                <div class='col-2'>
                    <span>
                    <button class='btn btn-info btn-sm std-btn' onclick='verify_h_value_act1();' id='temp-btn-h' >Verify</button>
                    </span>
                </div>
            </div>
        </div>

      <div  id="table-div-act1" style="display:none; margin-top: 2%">
         <div class="row justify-content-center">
            <div class="col-md-4">
               $$ sy_1 = h \× f(x_1, y_1, z_1) $$
            </div>
            <div class="col-md-4">
               $$ sz_1 = h \× g(x_1, y_1, z_1) $$
            </div>
         </div>
         <div class="row justify-content-center">
            <div class="col-lg-5">
               $$ sy_2 = h \× f(x_1 + \\frac{h}{2}, y_1 + \\frac{sy_1}{2}, z_1 + \\frac{sz_1}{2}) $$
            </div>
            <div class="col-lg-5">
               $$ sz_2 = h \× g(x_1 + \\frac{h}{2}, y_1 + \\frac{sy_1}{2}, z_1 + \\frac{sz_1}{2}) $$
            </div>
         </div>
         <div class="row justify-content-center">
            <div class="col-lg-5">
               $$ sy_3 = h \× f(x_1 + \\frac{h}{2}, y_1 + \\frac{sy_2}{2}, z_1 + \\frac{sz_2}{2}) $$
            </div>
            <div class="col-lg-5">
               $$ sz_3 = h \× g(x_1 + \\frac{h}{2}, y_1 + \\frac{sy_2}{2}, z_1 + \\frac{sz_2}{2}) $$
            </div>
         </div>
         <div class="row justify-content-center">
            <div class="col-lg-5">
               $$ sy_4 = h \× f(x_1 + h, y_1 + sy_3, z_1 + sz_3) $$
            </div>
            <div class="col-lg-5">
               $$ sz_4 = h \× g(x_1 + h, y_1 + sy_3, z_1 + sz_3) $$
            </div>
         </div>
         <div class="row justify-content-center">
            <div class="col-lg-5">
               $$ sy = \\frac{sy_1 + 2sy_2 + 2sy_3 + sy_4}{6} $$
            </div>
            <div class="col-lg-5">
               $$ sz = \\frac{sz_1 + 2sz_2 + 2sz_3 + sz_4}{6} $$
            </div>
         </div>
         <div class="row justify-content-center">
            <div class="col-md-4">
               $$ y_2 = y_1 + sy  $$
            </div>
            <div class="col-md-4">
               $$ z_2 = z_1 + sz  $$
            </div>
         </div>

            <h6 style="font-weight: 600; text-align: left">Enter the values upto 4 decimal places</h6>
            <div id="table-div"></div> <br>
               <div id="graph-div" style="display:none;">
                  <div class="row justify-content-center ">
                     <div class="col-md-6">
                        <p>
                           Calculate y(0.5) = <span id="y-dsp" style='display: inline-block'>
                           <input type='number' id='y-inp' class='form-control fs-16px' />
                           </span>
                        </p>
                     </div>
                     <div class="col-md-6">
                        <p>
                           Calculate z(0.5) = <span id="z-dsp" style='display: inline-block'>
                           <input type='number' id='z-inp' class='form-control fs-16px' />
                           </span>
                        </p>
                     </div>
                  </div>
                  <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='verify_y_value();' id='temp-btn-3' >Verify</button>   
                  <button class='btn btn-info btn-sm std-btn' style='display:none;position: relative;' onclick='activity2();' id='next-act-btn1' >Next</button>   
                </div>
            </div>
        </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('tb1-box');
    }, 150);
}
function calculate_hxy() {
    let inp_n = (document.getElementById(`n-inp`));
    if (inp_n.value == '0') {
        return;
    }
    let n_dsp = (document.getElementById('n-dsp'));
    let btn = (document.getElementById('temp-btn-2'));
    btn && btn.remove();
    inp_n.disabled = true;
    n_val = parseInt(inp_n.value);
    console.log('n = ', n_val);
    n_dsp.innerHTML = '';
    n_dsp.innerText = `${n_val}`;
    // calculate h
    h = (xn - x1) / n_val;
    h_val = parseFloat(h.toFixed(2));
    console.log('h= ', h_val);
    // calculate x
    x_val[0] = x1;
    for (let i = 1; i <= n_val; i++) {
        x_val[i] = parseFloat((x_val[i - 1] + h_val).toFixed(2));
    }
    console.log('x_val= ', x_val);
    // calculate y
    tb_data = gety(x1, xn, y1, z1, n_val);
    y05 = tb_data[0][tb_data[0].length - 1];
    z05 = tb_data[1][tb_data[1].length - 1];
    console.log('tb_data= ', tb_data);
    console.log('y05= ', y05);
    console.log('z05= ', z05);
    let div = (document.getElementById('h-div-act1'));
    div.style.display = 'block';
}
function verify_h_value_act1() {
    let h_inp = (document.getElementById('h-inp'));
    if (!verify_values(parseFloat(h_inp.value), parseFloat(h_val.toFixed(4)))) {
        h_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        h_inp.style.border = '1px solid #ced4da';
        h_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let h_dsp = (document.getElementById('h-dsp'));
    let btn = (document.getElementById('temp-btn-h'));
    btn.style.display = 'none';
    h_dsp.innerHTML = '';
    h_dsp.innerText = `${parseFloat(h_val.toFixed(4))}`;
    fill_table();
    let div = (document.getElementById('table-div-act1'));
    div.style.display = 'block';
}
function fill_table() {
    let div = (document.getElementById('table-div'));
    let header = ['x'];
    tb_data[0].unshift('y');
    tb_data[1].unshift('z');
    let n_inputs = [];
    let i = 0;
    for (i = 0; i <= n_val; i++) {
        header.push(`${x_val[i]}`);
        // tb_data[0].push(y_val[i]);
        n_inputs.push(i + 1);
    }
    let tb = new Verify_Rows_Cols_Custom_Fixed(header, tb_data, [0, 1], [n_inputs, n_inputs], '', div, true, true, exp, 4);
    tb.load_table();
}
function exp() {
    let div = (document.getElementById('graph-div'));
    div.style.display = 'block';
}
function verify_y_value() {
    let y_inp = (document.getElementById('y-inp'));
    let z_inp = (document.getElementById('z-inp'));
    let y_dsp = (document.getElementById('y-dsp'));
    let z_dsp = (document.getElementById('z-dsp'));
    console.log(y05, z05);
    if (!verify_values(parseFloat(y_inp.value), parseFloat(y05.toFixed(4)))) {
        y_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y_inp.style.border = '1px solid #ced4da';
        y_inp.disabled = true;
    }
    if (!verify_values(parseFloat(z_inp.value), parseFloat(z05.toFixed(4)))) {
        z_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        z_inp.style.border = '1px solid #ced4da';
        z_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let temp_btn = (document.getElementById('temp-btn-3'));
    let next_btn = (document.getElementById('next-act-btn1'));
    temp_btn && temp_btn.remove();
    y_inp.remove();
    z_inp.remove();
    y_dsp.innerText = `${parseFloat(y05.toFixed(4))}`;
    z_dsp.innerText = `${parseFloat(z05.toFixed(4))}`;
    next_btn.style.display = 'inline-block';
}
activity1();
//# sourceMappingURL=activity1.js.map