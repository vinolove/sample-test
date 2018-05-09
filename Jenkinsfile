pipeline{
    agent any
    option{
        timeout(time:60,units:'MINUTES')
        disableConcurrentBuils()
        buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '10'))
    }
    node {
        git url: 'https://github.com/vinolove/sample-test.git'
        def mvnHome = tool 'M3'
        env.PATH = "${mvnHome}/bin:${env.PATH}"
    }
    stages{
        stage('Prepare'){
            steps{
                echo "clean up working directory"
                deleteDir()
                sh 'mvn -B verify'
            }
        }
        stage('Build') {
            steps {
                sh "docker build -t gcr.io/clevero-ops/microservice-starter:latest ."
            }
        }
    }
}