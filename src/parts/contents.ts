import { Conf } from "../core/conf";
import { Func } from "../core/func";
import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";
import { Util } from "../libs/util";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _isHover: boolean = false
  private _rate: number = 0
  private _items: Array<Item> = []

  constructor(opt:any) {
    super(opt)

    const w = Func.val(40, 18)
    Tween.set(this.el, {
      width: w + 'vw',
      // x: (-w * 0.5) + 'vw',
    })

    const num = 30
    for(let i = 0; i < num; i++) {
      // 複製する
      const org = document.querySelector('.l-accordion.js-org') as HTMLElement
      const el = org.cloneNode(true) as HTMLElement
      this.el.appendChild(el)
      el.classList.remove('js-org')

      const item = new Item({
        el: el,
        id: i,
      })
      this._items.push(item)

      Tween.set(el, {
        zIndex: num - i,
      })
    }

    if(Conf.IS_TOUCH_DEVICE) {
      this._items[0].el.addEventListener('touchstart', () => {
        if(this._isHover) {
          this._eRollOut()
        } else {
          this._eRollOver()
        }

      })
    } else {
      this._setHover(this._items[0].el)
    }
  }

  //
  protected _eRollOver() {
    this._isHover = true
    this._items[0].addClass('-open')
  }

  //
  protected _eRollOut() {
    this._isHover = false
    this._items[0].removeClass('-open')
  }

  protected _update():void {
    super._update()

    const tg = this._isHover ? 1 : 0
    this._rate += (tg - this._rate) * 0.2

    this._items.forEach((item,i) => {
      const rot = Util.map(i, 0, (360 - (360 / this._items.length)) * this._rate, 0, this._items.length - 1)
      Tween.set(item.el, {
        rotationZ: rot
      })
    })
  }
}