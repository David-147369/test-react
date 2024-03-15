const randoms = {
  colorMin: 10,
  colorMax: 20,
  backgroundColorMin: 180,
  backgroundColorMax: 240,
  fontSizeMin: 16,
  fontSizeMax: 22,
};
export default function RandomCode(code: string) {
  //随机数字
  const randomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  // const randomStr=(max:number)=>{
  //     let str=''
  //     for(let i=0;i<max;i++){
  //         str+=randomNum(0,9)
  //     }
  //     return str
  // }
  //随机颜色
  const randomColor = (min: number, max: number) => {
    return `rgb(${randomNum(min, max)}, ${randomNum(min, max)}, ${randomNum(
      min,
      max,
    )})`;
  };
  const draw = () => {
    const canvas = document.getElementById("code-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    const width = canvas.width;
    const height = canvas.height;
    ctx.textBaseline = "bottom";
    // 绘制背景
    ctx.fillStyle = randomColor(
      randoms.backgroundColorMin,
      randoms.backgroundColorMax,
    );
    ctx.fillRect(0, 0, width, height);
    // 绘制文字
    for (let i = 0; i < code.length; i++) {
      drawText(ctx, code[i], i, width, height);
    }
  };
  const drawText = (
    ctx: CanvasRenderingContext2D,
    txt: string,
    i: number,
    width: number,
    height: number,
  ) => {
    ctx.fillStyle = randomColor(randoms.colorMin, randoms.colorMax);
    ctx.font =
      randomNum(randoms.fontSizeMin, randoms.fontSizeMax) + "px SimHei";
    const x = ((i + 1) * width) / (code.length + 1);
    const y = randomNum(randoms.fontSizeMax, height - 5);
    const deg = randomNum(-45, 45);
    // 修改坐标原点和旋转角度
    ctx.translate(x, y);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(txt, 0, 0);
    // 恢复坐标原点和旋转角度
    ctx.rotate((-deg * Math.PI) / 180);
    ctx.translate(-x, -y);
  };
  draw();
}
