let dis = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.OFF)
let giroder = Math.randomBoolean()
let velo = 30
basic.forever(function () {
    dis = DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12)
    if (dis != 0 && dis < 10) {
        giroder = Math.randomBoolean()
        velo = 30
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 50)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
        basic.pause(500)
        if (giroder == true) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
            basic.pause(1000)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
            basic.pause(1000)
        }
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, velo)
        if (dis > 50) {
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
        } else {
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
        }
        velo = velo + 1
    }
})
