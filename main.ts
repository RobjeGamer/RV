let rechts = 197
let links = 69
let achteruit = 5
let vooruit = 133
let ir_waarde = IR.IR_read()
basic.forever(function () {
    basic.showNumber(ir_waarde)
})
basic.forever(function () {
    if (ir_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
