import { Util } from '../libs/util';

export class Conf {
  private static _instance: Conf;

  // #############################################
  // 本番フラグ
  // #############################################
  public static IS_BUILD:boolean = false;

  // テスト用 パラメータ
  public static FLG_PARAM: boolean     = this.IS_BUILD ? false : false;
  public static FLG_LOW_FPS: boolean   = this.IS_BUILD ? false : false;
  public static FLG_DEBUG_TXT: boolean = false
  public static FLG_STATS: boolean     = Conf.IS_BUILD ? false : false
  public static FLG_TEST: boolean      = Conf.IS_BUILD ? false : false

  // パス
  public static PATH_ROOT = './'
  public static PATH_IMG: string = this.PATH_ROOT + 'assets/img/'

  // タッチデバイス
  public static USE_TOUCH: boolean = Util.isTouchDevice() && !Util.isWin()

  // ブレイクポイント
  public static BREAKPOINT = 950

  // PSDサイズ
  public static LG_PSD_WIDTH = 1440
  public static XS_PSD_WIDTH = 390

  // 簡易版
  public static IS_SIMPLE: boolean = Util.isAod()
  public static IS_MOTION_FULL: boolean = !this.IS_SIMPLE

  public static IS_DESKTOP: boolean = Util.isPc() && !Util.isIPad()
  public static IS_PC: boolean = Util.isPc()
  public static IS_SP: boolean = Util.isSp()
  public static IS_AND: boolean = Util.isAod()
  public static IS_TAB: boolean = Util.isIPad()
  public static USE_ROLLOVER: boolean = Util.isPc() && !Util.isIPad()
  public static IS_WIN: boolean = Util.isWin()
  public static IS_FF: boolean = Util.isFF()
  public static IS_SF: boolean = Util.isSafari()
  public static IS_TOUCH_DEVICE: boolean = Util.isTouchDevice() && !Util.isWin()
  public static USE_MOVTEX = !Util.isSafari()

  public static NUM: number = 10

  constructor() {}
  public static get instance(): Conf {
    if (!this._instance) {
      this._instance = new Conf();
    }
    return this._instance;
  }
}
