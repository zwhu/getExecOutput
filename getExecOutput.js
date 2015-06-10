// 通过 nodejs 的 child_process 得到执行的 shell 命令后输出的信息并写入 log 中

import child from 'child_process';

import fs from 'fs';

import path from 'path';


export default (cmdPath, logPath) => {

  cmdPath = path.normalize(cmdPath);
  logPath = path.normalize(logPath);

  let c = child.execFile(cmdPath)
    , writeStream = fs.createWriteStream(logPath)
    , output = '';

  // output 暂时没什么用

  c.stdout.on('data', (data) => {
    output += data;
    process.stdout.write(data);
    writeStream.write(data);
  });

  c.stderr.on('data', (data) => {
    output += data;
    process.stdout.write(data);
    writeStream.write(data);
  });

}


