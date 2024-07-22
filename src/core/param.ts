import GUI from 'lil-gui';
import Stats from 'three/examples/jsm/libs/stats.module';
import { Conf } from './conf';
import { Update } from '../libs/update';

export class Param {
  private static _instance: Param;

  private _dat: any;
  private _stats: any;
  private _debug: HTMLElement | any

  public clipId: number = 0

  public main = {
    bg:{value:0x000000, type:'color'},
  }

  constructor() {
    if (Conf.FLG_PARAM) {
      this.makeParamGUI();
    }

    if(Conf.FLG_DEBUG_TXT) {
      this._debug = document.createElement('div')
      this._debug.classList.add('l-debug')
      document.body.appendChild(this._debug)
    }

    if (Conf.FLG_STATS) {
      this._stats = Stats();
      document.body.appendChild(this._stats.domElement);
    }

    Update.instance.add(() => {
      this._update();
    });
  }

  private _update(): void {
    if (this._stats != undefined) {
      this._stats.update();
    }
  }

  public static get instance(): Param {
    if (!this._instance) {
      this._instance = new Param();
    }
    return this._instance;
  }

  public makeParamGUI(): void {
    if (this._dat != undefined) return;

    this._dat = new GUI();
    this._add(this.main, 'main');
  }

  private _add(obj: any, folderName: string): void {
    const folder = this._dat.addFolder(folderName);
    for (var key in obj) {
      const val: any = obj[key];
      if (val.use == undefined) {
        if (val.type == 'color') {
          folder.addColor(val, 'value').name(key);
        } else {
          if (val.list != undefined) {
            folder.add(val, 'value', val.list).name(key);
          } else {
            folder.add(val, 'value', val.min, val.max).name(key);
          }
        }
      }
    }
  }

  public addDebug(t: string): void {
    if(this._debug != undefined) {
      console.log(t)
      this._debug.innerHTML += t + '<br>'
    }
  }

  public setDebug(t: string): void {
    if(this._debug != undefined) {
      this._debug.innerHTML = t
    }
  }
}
