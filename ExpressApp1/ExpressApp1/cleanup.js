process.once('SIGUSR2', function () {
        process.kill(process.pid, 'SIGUSR2');
});


process.on('SIGINT', function () {
        process.exit(0);
});