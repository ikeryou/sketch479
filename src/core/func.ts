import { ScreenType } from './screenType'
import { Conf } from './conf'

export class Func {
  constructor() {}

  public static ratio(): number {
    return window.devicePixelRatio || 1
  }

  public static px(num: number): string {
    return num + 'px'
  }

  public static useScreen(): boolean {
    return screen != undefined
  }

  public static sw(): number {
    return window.innerWidth
  }

  public static sh(): number {
    return window.innerHeight
  }

  public static screenOffsetY(): number {
    if (Func.sw() > window.innerHeight) {
      return 0
    } else {
      return (window.innerHeight - Func.sh()) * 0.5
    }
  }

  public static screen(): number {
    if (window.innerWidth <= Conf.BREAKPOINT) {
      return ScreenType.XS
    } else {
      return ScreenType.LG
    }
  }

  public static isXS(): boolean {
    return Func.screen() == ScreenType.XS
  }

  public static isLG(): boolean {
    return Func.screen() == ScreenType.LG
  }

  public static val(xs: any, lg: any): any {
    if (Func.isXS()) {
      return xs
    } else {
      return lg
    }
  }

  public static r(val: number): number {
    const base = Func.val(Conf.XS_PSD_WIDTH, Conf.LG_PSD_WIDTH)
    return (val / base) * Func.sw()
  }
}
