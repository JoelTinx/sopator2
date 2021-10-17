class SopatorDrawer {
  constructor(canvas, soup, log) {
    this.canvas = canvas;
    this.ctx;
    this.width = 650;
    this.height = 650;
    this.space = 25;
    this.log = log;
    this.soup = soup;
    this.size = 15;
    this.text = '';
    this.desv = {
      0: { x: 0, y: 0 },
      1: { x: 0.3, y: 1 },
      2: { x: 0.75, y: 1 },
      3: { x: 0.35, y: 0.9 },
      4: { x: 1, y: 0 },
      5: { x: 0.4, y: -0.2 },
      6: { x: 0.75, y: 0 },
      7: { x: 0.35, y: -0.2 },
    };
  }

  setCanvas() {
    this.canvas.setAttribute('width', this.width);
    this.canvas.setAttribute('height', this.height);
    this.ctx = this.canvas.getContext('2d');

    // background color
    this.ctx.beginPath();
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.closePath();
    this.ctx.fill();

    // paint border
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#000000';
    this.ctx.strokeRect(0, 0, this.width, this.height);
    this.ctx.closePath();
    this.ctx.fill();
  }

  drawSoup() {
    let text = '';
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        text += this.soup[i][j] + ' ';

        this.ctx.beginPath();
        this.ctx.font = '13pt Tahoma';
        this.ctx.fillStyle = '#000000';
        this.ctx.fillText(
          this.soup[i][j],
          15 + i * this.space,
          30 + j * this.space
        );
        this.ctx.closePath();
        this.ctx.fill();
      }
      text += '\n';
    }
  }

  paintSolution() {
		for (const item of this.log) {
			this.drawRect(item.word, item.y, item.x, item.index_dir, item.dir);
		}
  }

  drawRect(word, x, y, index_dir, dir) {
    let angle = 0.0;
    let vx = 1;
    let vy = 1;
    let m = Math.abs(dir.x) + Math.abs(dir.y); // pendiente;

    if (Math.abs(dir.x) + Math.abs(dir.y) === 2) {
      angle = Math.PI / 4;
      vx *= 0.7071;
      vy *= 0.7071;
    } else {
      angle = Math.abs(dir.x) === 1 ? Math.PI / 2 : 0;
    }

    vx *= word.length * this.space * dir.x;
    vy *= word.length * this.space * dir.y;

    const yi = 10 + x * this.space;
    const xi = 15 + y * this.space;

    console.log(
      'DESV: ',
      this.desv[index_dir],
      'X: ',
      xi,
      ' Y: ',
      yi,
      ' WORD:',
      word,
      ' LEN: ',
      word.length,
      ' SPACE: ',
      this.space,
      'DIR: ',
      dir.x,
      dir.y,
      ' V: ',
      vx,
      vy
    );

    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
    this.ctx.fillStyle = 'rgba(255, 255, 0, 0.25)';

    this.ctx.moveTo(xi, yi);
    this.ctx.lineTo(xi + vx, yi + vy);
    this.ctx.lineTo(
      xi + vx - (dir.x === 0 ? 1 : dir.x) * this.space * Math.cos(angle),
      yi + vy + (dir.y === 0 ? 1 : dir.y) * this.space * Math.sin(angle)
    );
    this.ctx.lineTo(
      xi - (dir.x === 0 ? 1 : dir.x) * this.space * Math.cos(angle),
      yi + (dir.y === 0 ? 1 : dir.y) * this.space * Math.sin(angle)
    );

    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
  }

  clean() {
		console.log('Cleanning...');
	}
}
