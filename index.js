const tc = require('@actions/tool-cache');


async function run() {
    const taskPath = await tc.downloadTool('https://github.com/go-task/task/releases/download/v2.8.1/task_linux_amd64.tar.gz');
}

run();