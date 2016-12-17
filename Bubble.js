function Bubble() {
  this.sze = random(bubmin, bubmax)
  this.x = random(bubmax * 2, width - (bubmax * 2))
  this.y = 0 - random(this.sze, this.sze + 5)
  this.disp = function() {
    ellipse(this.x, this.y, this.sze)
  }
  this.move = function() {
    this.y = this.y + (this.sze * (height / 10000)) + (score / 10000)
    if (this.y + (this.sze / 2) > rtop) {
      vol = vol + (3.14159 * (this.sze / 2) * (this.sze / 2))
      this.sze = random(bubmin, bubmax)
      this.x = random(this.sze, width - this.sze)
      this.y = this.sze
    }
  }
}