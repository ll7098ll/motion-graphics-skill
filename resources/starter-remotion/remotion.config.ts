import { Config } from '@remotion/cli/config';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

if (fs.existsSync(chromePath)) {
  Config.setBrowserExecutable(chromePath);
} else if (fs.existsSync(edgePath)) {
  Config.setBrowserExecutable(edgePath);
}

Config.setVideoImageFormat('jpeg');
Config.setChromiumOpenGlRenderer('angle');
Config.setConcurrency(2);
