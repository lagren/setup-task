const tc = require('@actions/tool-cache');
const core = require('@actions/core');


async function run() {
    const taskPath = await tc.downloadTool('https://github.com/go-task/task/releases/download/v2.8.1/task_linux_amd64.tar.gz');
    const node12ExtractedFolder = await tc.extractTar(taskPath);
    const cachedPath = await tc.cacheDir(node12ExtractedFolder, "task", "2.8.1");
    core.addPath(cachedPath);
}

run();