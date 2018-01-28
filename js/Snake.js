class Snake {
   constructor() {
      this.posX = 0
      this.posY = 0
      this.xSpeed = 0
      this.ySpeed = 0
      this.snakeSize = 1
      this.body = []
   }

   direction(x, y) {
      this.xSpeed = x
      this.ySpeed = y
   }

   move() {
      if(this.body.length > 1) {
         //Mueve las coordenadas de derecha a izquierda.
         for(let i = 0; i < this.body.length - 1; i++) {
            this.body[i] = this.body[i + 1]
         }
      }
      //Agrega nueva posición al array. Ejm: Se agrega una coordenada 0,0 y abajo de actualiza a 0,20.
      //En otra vuelta toma la coordenada 0,20 si this.snakeSize no aumentó o la agrega si this.snakeSize
      //aumentó y luego se vuelve a actualizar.
      this.body[this.snakeSize - 1] = createVector(this.posX, this.posY)
      //Se actualiza la posición.
      this.posX += this.xSpeed * 20
      this.posY += this.ySpeed * 20
      //Restringe un valor entre un valor mínimo y máximo.
      this.posX = constrain(this.posX, 0, (width - 20))
      this.posY = constrain(this.posY, 0, (height - 20))
   }

   show() {
      fill(255)
      //Recorre y dibuja los cuadros (Cuerpo).
      for(let i = 0; i < this.body.length; i++) {
         rect(this.body[i].x, this.body[i].y, 20, 20)
      }
   }

   eatFood(pos) {
      //Calcula la distancia entre dos puntos. (La posición que viene o un cuadro más adelante con
      //la posición de la comida).
      let d = dist(this.posX, this.posY, pos.x, pos.y)
      if(d <= 1) {
         this.snakeSize++
         return true
      } else {
         return false
      }
   }
}