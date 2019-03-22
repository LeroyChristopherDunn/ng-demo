node {
  
    def nodeHome = tool name: 'node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${nodeHome}/bin:${env.PATH}"
  
    stage('check tools') {
        sh "node -v"
        sh "npm -v"
    }

    stage('checkout') {
        checkout scm
    }

    stage('npm install') {
        sh "npm install"
    }

    stage('unit tests') {
        sh "npm run test"
    }

    stage('integration tests') {
        sh "npm run integrationTest"
    }

    stage('deploy to stagin environment') {
        sh "echo 'deployed to dev envrionment'"
    }    
}

stage('deploy to Staging environment') {
    input 'Deploy to staging environmet?'
    sh "echo 'deployed to staging envrionment'"
}

stage('deploy to Prod environment') {
    input 'Deploy to prod environmet?'
    sh "echo 'deployed to prod envrionment'"
}
