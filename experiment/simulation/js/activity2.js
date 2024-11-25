function activity2() {
    let temp_btn = (document.getElementById('next-act-btn1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 2', 'tb3-box');
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>
        $$ x_1 = 0, y_1 = 1, z_1 = 1  $$
        $$ \\frac{dy}{dx} = f(x, y, z) = y \× z  $$
        $$ \\frac{dz}{dx} = g(x, y, z) = x \× y  $$
        $$ y(0.2) = ?  $$
        $$ z(0.2) = ?  $$
        <br>
        <div class="row">
            <div class='col-3'>
                <span>Select the value of n: </span>
            </div>

            <div class='col-2'>
               <span id="act2-n-dsp">
                  <select id='act2-n-inp' class='form-select fs-16px'>
                     <option value="0" selected>Select</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                  </select>
               </span>
            </div>

            <div class='col-2'>
                <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='act2_calculate_hxy();' id='temp-btn-4' >Next</button>
            </div>
        </div>


        <div id="h-div-act2" style="display:none; margin-top: 2%">
            <div class="row">
                <div class='col-3'>
                    <span>Calculate the value of h: </span>
                </div>

               <div class='col-2'>
                  <span id="act2-h-dsp">
                     <input type='number' id='h-inp-act2' class='form-control fs-16px' />
                  </span>
               </div>

                <div class='col-2'>
                    <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='verify_h_value_act2();' id='temp-btn-h-act2' >Verify</button>
                </div>
            </div> 
        </div>

      <div id="table-div-act2" style="display:none; margin-top: 2%">
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
   <div id="act2_table-div"></div> <br>
   <div id="act2_graph-div" style="display:none;">
      <div class="row justify-content-center ">
         <div class="col-md-6">
            <p>
               Calculate y(0.2) = <span id="act2-y-dsp" style='display: inline-block'>
               <input type='number' id='act2_y-inp' class='form-control fs-16px' />
               </span>
            </p>
         </div>
         <div class="col-md-6">
            <p>
               Calculate z(0.2) = <span id="act2-z-dsp" style='display: inline-block'>
               <input type='number' id='act2-z-inp' class='form-control fs-16px' />
               </span>
            </p>
         </div>
      </div>
      <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='act2_verify_y_value();' id='temp-btn-5' >Verify</button>
      <button class='btn btn-info btn-sm std-btn' style='display:none;position: relative;' onclick='activity3();' id='next-act-btn2' >Next</button>    
   </div>
        </div>
    </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('tb3-box');
    }, 150);
}
function act2_calculate_hxy() {
    let act2_inp_n = (document.getElementById(`act2-n-inp`));
    if (act2_inp_n.value == '0')
        return;
    let n_dsp = (document.getElementById('act2-n-dsp'));
    let btn = (document.getElementById('temp-btn-4'));
    btn && btn.remove();
    act2_inp_n.disabled = true;
    act2_n_val = parseInt(act2_inp_n.value);
    console.log('act2-n = ', act2_n_val);
    n_dsp.innerHTML = '';
    n_dsp.innerText = `${act2_n_val}`;
    // calculate h
    act2_h = (act2_xn - act2_x1) / act2_n_val;
    act2_h_val = parseFloat(act2_h.toFixed(2));
    console.log('act2_h= ', act2_h_val);
    // calculate x
    act2_x_val[0] = act2_x1;
    for (let i = 1; i <= act2_n_val; i++) {
        act2_x_val[i] = parseFloat((act2_x_val[i - 1] + act2_h_val).toFixed(2));
    }
    console.log('x_val= ', act2_x_val);
    // calculate y
    act2_tb_data = gety2(act2_x1, act2_xn, act2_y1, act2_z1, act2_n_val);
    act2_y02 = act2_tb_data[0][act2_tb_data[0].length - 1];
    act2_z02 = act2_tb_data[1][act2_tb_data[1].length - 1];
    console.log('act2_tb_data= ', act2_tb_data);
    console.log('act2_y02= ', act2_y02);
    console.log('act2_z02= ', act2_z02);
    let div = (document.getElementById('h-div-act2'));
    div.style.display = 'block';
}
function verify_h_value_act2() {
    let h_inp_act2 = (document.getElementById('h-inp-act2'));
    if (!verify_values(parseFloat(h_inp_act2.value), parseFloat(act2_h_val.toFixed(4)))) {
        h_inp_act2.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        h_inp_act2.style.border = '1px solid #ced4da';
        h_inp_act2.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let h_dsp = (document.getElementById('act2-h-dsp'));
    let btn = (document.getElementById('temp-btn-h-act2'));
    btn.style.display = 'none';
    h_dsp.innerHTML = '';
    h_dsp.innerText = `${parseFloat(act2_h_val.toFixed(4))}`;
    act2_fill_table();
    let div = (document.getElementById('table-div-act2'));
    div.style.display = 'block';
}
function act2_fill_table() {
    let div = (document.getElementById('act2_table-div'));
    let act2_header = ['x'];
    act2_tb_data[0].unshift('y');
    act2_tb_data[1].unshift('z');
    let act2_n_inputs = [];
    let i = 0;
    for (i = 0; i <= act2_n_val; i++) {
        act2_header.push(`${act2_x_val[i]}`);
        // act2_tb_data[0].push(act2_y_val[i]);
        act2_n_inputs.push(i + 1);
    }
    let tb = new Verify_Rows_Cols_Custom_Fixed(act2_header, act2_tb_data, [0, 1], [act2_n_inputs, act2_n_inputs], '', div, true, true, act2_exp, 4);
    tb.load_table();
}
function act2_exp() {
    let div = (document.getElementById('act2_graph-div'));
    div.style.display = 'block';
}
function act2_verify_y_value() {
    let act2_y_inp = (document.getElementById('act2_y-inp'));
    let act2_z_inp = (document.getElementById('act2-z-inp'));
    let y_dsp = (document.getElementById('act2-y-dsp'));
    let z_dsp = (document.getElementById('act2-z-dsp'));
    console.log(act2_y02, act2_z02);
    if (!verify_values(parseFloat(act2_y_inp.value), parseFloat(act2_y02.toFixed(4)))) {
        act2_y_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        act2_y_inp.style.border = '1px solid #ced4da';
        act2_y_inp.disabled = true;
    }
    if (!verify_values(parseFloat(act2_z_inp.value), parseFloat(act2_z02.toFixed(4)))) {
        act2_z_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        act2_z_inp.style.border = '1px solid #ced4da';
        act2_z_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let temp_btn = (document.getElementById('temp-btn-5'));
    let next_btn = (document.getElementById('next-act-btn2'));
    temp_btn && temp_btn.remove();
    act2_y_inp.remove();
    act2_z_inp.remove();
    y_dsp.innerText = `${parseFloat(act2_y02.toFixed(4))}`;
    z_dsp.innerText = `${parseFloat(act2_z02.toFixed(4))}`;
    next_btn.style.display = 'inline-block';
}
// activity2();
//# sourceMappingURL=activity2.js.map