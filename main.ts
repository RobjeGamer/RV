let vooruit = 0
let achteruit = 0
let links = 0
let rechts = 0
let ir_waarde = 0
IR.IR_init()
basic.forever(function () {
    ir_waarde = IR.IR_read()
    rechts = 197
    links = 69
    achteruit = 5
    vooruit = 133
})
basic.forever(function () {
    basic.showNumber(ir_waarde)
})
