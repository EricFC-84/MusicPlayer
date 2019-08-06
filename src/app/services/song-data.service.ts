import {
  Injectable
} from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongDataService {

  currentView: string = "song-list";
  currentSong: object;
  arrSongs: object[] = [{
      "title": "CHA-LA HEAD CHA-LA",
      "author": "Hironobu Kageyama",
      "year": "1989",
      "album": "Dragon Ball Z",
      "src": environment.imagenes_prefix + "assets/cha-la_head_cha-la.mp3",
      "style": ["anime"],
      "img": environment.imagenes_prefix + "assets/CHA-LA_Vinyl.png",
      "lyrics": {
        "original": `光る　雲を突き抜け　Fly Away (Fly Away)\nからだじゅうに　広がるパノラマ\n顔を　蹴られた地球が怒って　(怒って)\n火山を爆発させる\n溶けた北極1の中に\n恐竜がいたら　玉乗り仕込みたいね\n\nCHA-LA HEAD-CHA-LA\n何が起きても気分は　へのへのカッパ\nCHA-LA HEAD-CHA-LA\n胸がパチパチするほど\n騒ぐ元気玉…Sparking!\n空を　急降下　Jet Coaster (Coaster)\n落ちてゆくよ　パニックの楽園2へ\n景色　逆さになると愉快さ　(愉快さ)\n山さえ　お尻に見える\n悩む時間はないよ\nどこかに潜む「ビックリ!」に逢いたいから \nCHA-LA HEAD-CHA-LA\n頭カラッポの方が　夢詰め込める\nCHA-LA HEAD-CHA-LA\n笑顔ウルトラZで\n今日もアイヤイヤイヤイヤイ\nCHA-LA HEAD-CHA-LA\n何が起きても気分は　へのへのカッパ\nCHA-LA HEAD-CHA-LA\n胸がパチパチするほど\n騒ぐ元気玉…Sparking!\n` ,
        "translation": `Piercing the shining clouds, I fly away (fly away),\nWhile a panorama spreads through my body.\nKicked in the face, the Earth gets angry (gets angry),\nAnd makes a volcano explode!\n\nWithin the melted polar ice,\nIf there’s a dinosaur, I want to train it to balance on a ball!\n\nCHA-LA HEAD-CHA-LA\nNo matter what happens, I feel like it’s no big deal!\nCHA-LA HEAD CHA-LA\nJust as loudly as my heart pounds,\nThe Genki-Dama roars...Sparking!\n\nDiving through the sky on a roller coaster (coaster),\nI fall into a paradise of panic!\nThe scenery turns upside-down and I cheer up (cheer up),\n’Cause the mountains even look like butts!!\n\nThere’s no time for worrying,\n’Cause there’s a suprise hidden somewhere, and I wanna find it!\n\nCHA-LA HEAD-CHA-LA\nI’d rather have my head be empty, so I can stuff it with dreams!\nCHA-LA HEAD-CHA-LA\nWith a smile that’s Ultra-Z,\nEven today is ai-yai-yai-yai-yai...\n\nCHA-LA HEAD-CHA-LA\nNo matter what happens, I feel like it’s no big deal!\nCHA-LA HEAD CHA-LA\nJust as loudly my heart pounds,\nThe Genki-Dama roars...Sparking!`
      }    
    },
    {
      "title": "Guren no Yumiya",
      "author": "Linked Horizon",
      "year": "2014",
      "album": "Attack on Titan",
      "src": environment.imagenes_prefix + "assets/guren-no-yumiya.mp3",
      "style": ["anime"],
      "img": environment.imagenes_prefix + "assets/guren-no-yumiya.jpg",
      "lyrics": {
        "original":`Seid ihr das Essen?\nNein, wir sind der Jager!\n\n踏まれた花の 名前も知らずに\n地に墜ちた鳥は 風を待ち侘びる\n\n祈ったところで 何も変わらない\n≪不本意な現状≫(いま)を変えるのは 戦う覚悟だ…\n\n屍踏み越えて 進む意志を 嗤う豚よ\n家畜の安寧 …虚偽の繁栄 …死せる俄狼の『自由』を!\n\n囚われた屈辱は 反撃の嚆矢(こうし)だ 城壁の其の彼方 獲物を屠る≪狩人≫(イェーガー)\n迸る≪殺意≫(しょうどう)に 其の身を灼きながら 黄昏に緋を穿つ\n紅蓮の弓矢\n\n矢を番え追い駈ける 標的(やつ)は逃がさない\n矢を放ち追い詰める 決して逃がさない\n\n限界まで引き絞る はち切れそうな弦\n≪標的≫(やつ)が息絶えるまで 何度でも放つ\n\n獲物を殺すのは\n≪凶器≫(どうぐ)でも 技術でもない\n研ぎ澄まされた お前自身の殺意だ\n\nWir sind der Jager 焔のように熱く!\nWir sind der Jager 氷のように冷ややかに!\nWir sind der Jager 己を矢に込めて!\nWir sind der Jager 全てを貫いて征け!\n\n何かを変える事が出来るのは\n何かを捨てる事が出来るもの\n\n何ひとつ≪危険性≫(リスク)等 背負わないままで 何かが叶う等……\n\n暗愚の想定 …唯の幻影 …今は無謀な勇気も…\n『自由』の尖兵 …賭けの攻勢\n奔る奴隷に勝利を!\n\n架せられた不条理は 進撃の嚆矢(こうし)だ\n奪われた其の地平『自由』(せかい)を望む≪あの日の少年≫(エレン)\n止めどなき≪殺意≫(しょうどう)に 其の身を侵されながら 宵闇に紫(し)を運ぶ\n冥府の弓矢\n`,
        "translation": ""
      }
    },
      {
        "title": "Zankoku na Tenshi",
        "author": "Yōko Takahashi",
        "year": "1995",
        "album": "Shinseiki Evangelion",
        "src": environment.imagenes_prefix + "assets/zankoku-na-tenshi.mp3",
        "style": ["anime"],
        "img": environment.imagenes_prefix + "assets/zankoku-na-tenshi.jpg",
        "lyrics": {
          "original":`残酷な天使のように\n少年よ　神話になれ\n\n青い風がいま\n胸のドアを叩いても\n私だけをただ見つめて\n微笑んでるあなた\nそっとふれるもの\nもとめることに夢中で\n運命さえまだ知らない\nいたいけな瞳\n\nだけどいつか気付くでしょう　その背中には\n遥か未来　めざすための　羽根があること\n\n残酷な天使のテーゼ\n窓辺からやがて飛び立つ\nほとばしる熱いパトスで\n思い出を裏切るなら\nこの宇宙(そら)を抱いて輝く\n少年よ　神話になれ\n\nずっと眠ってる\n私の愛の揺りかご\nあなただけが　夢の使者に\n呼ばれる朝がくる\n細い首筋を\n月あかりが映してる\n世界中の時を止めて\n閉じこめたいけど\n\nもしもふたり逢えたことに　意味があるなら\n私はそう　自由を知る　ためのバイブル\n\n残酷な天使のテーゼ\n悲しみがそしてはじまる\n抱きしめた命のかたち\nその夢に目覚めたとき\n誰よりも光を放つ\n少年よ　神話になれ\n\n人は愛をつむぎながら　歴史をつくる\n女神なんてなれないまま　私は生きる \n\n残酷な天使のテーゼ\n窓辺からやがて飛び立つ\nほとばしる熱いパトスで\n思い出を裏切るなら\nこの宇宙(そら)を抱いて輝く\n少年よ　神話になれ\n`,
          "translation": `Like a cruel angel,\nyoung boy, become the legend!\n\nA blue wind is now\nknocking at the door to your heart, and yet\nyou are merely gazing at me\nand smiling.\n\nSomething gently touching--\nyou're so intent on seeking it out,\nthat you can't even see your fate yet,\nwith such innocent eyes.\n\nBut someday I think you'll find out\nthat what's on your back\nare wings that are for\nheading for the far-off future.\n\nThe cruel angel's thesis\nwill soon take flight through the window,\nwith surging, hot pathos,\nif you betray your memories.\nEmbracing this sky [universe] and shining,\nyoung boy, become the legend!\n\nSleeping for a long time\nin the cradle of my love\nThe morning is coming when you alone will be called\nby a messenger of dreams.\n\nMoonlight reflects off\nthe nape of your slender neck.\nStopping time all throughout the world\nI want to confine them, but...\n\nSo if two people being brought together by fate\nhas any meaning,\nI think that it is a "bible"\nfor learning freedom.\n\nThe cruel angel's thesis.\nThe sorrow then begins.\nYou held tight to the form of life\nwhen you woke up from that dream.\nYou shine brighter than anyone else.\nYoung boy, become the legend!\n\nPeople create history\nwhile weaving love.\nEven knowing I'll never be a goddess or anything like that,\nI live on.\n\nThe cruel angel's thesis\nwill soon take flight through the window,\nwith surging, hot pathos,\nif you betray your memories.\nEmbracing this sky and shining,\nyoung boy, become the legend!\n\nA blue wind is now\nknocking at the door to your heart, and yet\nyou are merely gazing at me\nand smiling.\n\nSomething gently touching--\nyou're so intent on seeking it out,\nthat you can't even see your fate yet,\nwith such innocent eyes.\n\nBut someday I think you'll find out\nthat what's on your back\nare wings that are for\nheading for the far-off future.\n\nThe cruel angel's thesis\nwill soon take flight through the window,\nwith surging, hot pathos,\nif you betray your memories.\nEmbracing this sky [universe] and shining,\nyoung boy, become the legend!`
        }
    },
    {
      "title": "Again",
      "author": "YUI",
      "year": "2009",
      "album": "Fullmetal Alchemist: Brotherhood",
      "src": environment.imagenes_prefix + "assets/again.mp3",
      "style": ["anime"],
      "img": environment.imagenes_prefix + "assets/again.jpg",
      "lyrics": {
        "original":`残酷な天使のように\n少年よ　神話になれ\n\n青い風がいま\n胸のドアを叩いても\n私だけをただ見つめて\n微笑んでるあなた\nそっとふれるもの\nもとめることに夢中で\n運命さえまだ知らない\nいたいけな瞳\n\nだけどいつか気付くでしょう　その背中には\n遥か未来　めざすための　羽根があること\n\n残酷な天使のテーゼ\n窓辺からやがて飛び立つ\nほとばしる熱いパトスで\n思い出を裏切るなら\nこの宇宙(そら)を抱いて輝く\n少年よ　神話になれ\n\nずっと眠ってる\n私の愛の揺りかご\nあなただけが　夢の使者に\n呼ばれる朝がくる\n細い首筋を\n月あかりが映してる\n世界中の時を止めて\n閉じこめたいけど\n\nもしもふたり逢えたことに　意味があるなら\n私はそう　自由を知る　ためのバイブル\n\n残酷な天使のテーゼ\n悲しみがそしてはじまる\n抱きしめた命のかたち\nその夢に目覚めたとき\n誰よりも光を放つ\n少年よ　神話になれ\n\n人は愛をつむぎながら　歴史をつくる\n女神なんてなれないまま　私は生きる \n\n残酷な天使のテーゼ\n窓辺からやがて飛び立つ\nほとばしる熱いパトスで\n思い出を裏切るなら\nこの宇宙(そら)を抱いて輝く\n少年よ　神話になれ\n`,
        "translation": `Like a cruel angel,\nyoung boy, become the legend!\n\nA blue wind is now\nknocking at the door to your heart, and yet\nyou are merely gazing at me\nand smiling.\n\nSomething gently touching--\nyou're so intent on seeking it out,\nthat you can't even see your fate yet,\nwith such innocent eyes.\n\nBut someday I think you'll find out\nthat what's on your back\nare wings that are for\nheading for the far-off future.\n\nThe cruel angel's thesis\nwill soon take flight through the window,\nwith surging, hot pathos,\nif you betray your memories.\nEmbracing this sky [universe] and shining,\nyoung boy, become the legend!\n\nSleeping for a long time\nin the cradle of my love\nThe morning is coming when you alone will be called\nby a messenger of dreams.\n\nMoonlight reflects off\nthe nape of your slender neck.\nStopping time all throughout the world\nI want to confine them, but...\n\nSo if two people being brought together by fate\nhas any meaning,\nI think that it is a "bible"\nfor learning freedom.\n\nThe cruel angel's thesis.\nThe sorrow then begins.\nYou held tight to the form of life\nwhen you woke up from that dream.\nYou shine brighter than anyone else.\nYoung boy, become the legend!\n\nPeople create history\nwhile weaving love.\nEven knowing I'll never be a goddess or anything like that,\nI live on.\n\nThe cruel angel's thesis\nwill soon take flight through the window,\nwith surging, hot pathos,\nif you betray your memories.\nEmbracing this sky and shining,\nyoung boy, become the legend!\n\nA blue wind is now\nknocking at the door to your heart, and yet\nyou are merely gazing at me\nand smiling.\n\nSomething gently touching--\nyou're so intent on seeking it out,\nthat you can't even see your fate yet,\nwith such innocent eyes.\n\nBut someday I think you'll find out\nthat what's on your back\nare wings that are for\nheading for the far-off future.\n\nThe cruel angel's thesis\nwill soon take flight through the window,\nwith surging, hot pathos,\nif you betray your memories.\nEmbracing this sky [universe] and shining,\nyoung boy, become the legend!`
      }
  }
  ];
  


  getSongs(): object[] {
    return this.arrSongs;
  }

  playSong(i: number): void {
    this.currentSong = this.arrSongs[i];
    this.currentView = "player";
    window.scroll(0,0);
    console.log(this.currentSong)
    console.log(i)

  }

  setView(view:string){
    this.currentView = view;
  }
  constructor() {}
}
