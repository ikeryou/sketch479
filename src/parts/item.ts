import { MyDisplay } from "../core/myDisplay";

// -----------------------------------------
//
// -----------------------------------------
export class Item extends MyDisplay {

  constructor(opt:any) {
    super(opt)

    this.addClass('item')
    if(opt.id == 0) {
      this.qs('.text').textContent = 'title'
    } else {
      this.addClass('-nakami')
      // ランダムな100文字
      this.qs('.text').textContent = Math.random().toString(36).slice(-8)
    }
  }


  protected _update():void {
    super._update()
  }
}