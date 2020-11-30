controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 6 6 6 6 6 6 . . 
        . . . . . . 5 5 4 6 6 6 6 6 6 6 
        . . . . . . . 4 6 6 6 6 6 6 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceplane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.spray, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    life += -1
    pause(1000)
    if (life == 0) {
        spaceplane.destroy(effects.fire, 500)
    }
})
let skurk: Sprite = null
let projectile: Sprite = null
let spaceplane: Sprite = null
let life = 0
life = 5
info.setScore(0)
spaceplane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 8 8 8 8 . . . . . . . . 
    . . . . 8 8 8 8 8 . . . . . . . 
    . . 5 5 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 4 8 4 4 4 5 5 5 5 5 5 . . 
    . . 5 5 8 8 8 8 8 8 . . . . . . 
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . . 8 8 8 8 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
spaceplane.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(spaceplane, 200, 200)
effects.blizzard.startScreenEffect(500)
game.onUpdateInterval(1000, function () {
    skurk = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . . 4 2 5 2 2 2 2 2 2 4 . . . 
        . . . 4 2 5 2 2 2 2 2 2 4 . . . 
        . . . 4 2 5 5 5 5 5 5 2 4 . . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    skurk.setVelocity(-100, 0)
    skurk.setPosition(180, randint(0, 120))
})
