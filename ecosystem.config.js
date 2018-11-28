module.exports = {
  apps: [{
    name: 'deem-ai-page',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-220-163-199.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/deem-ai-page.pem',
      ref: 'origin/master',
      repo: 'git@github.com:deem-ai/deem-ai.github.io.git',
      path: '/home/ubuntu/deem-ai-page',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}