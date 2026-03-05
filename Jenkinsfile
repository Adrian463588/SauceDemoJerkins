pipeline {
    agent any

    triggers {
        githubPush()
    }

    options {
        disableConcurrentBuilds()
        ansiColor('xterm')
        timestamps()
    }

    environment {
        NODE_ENV = 'test'
        JAVA_HOME = '/opt/java/openjdk'
        PATH = "${JAVA_HOME}/bin:${env.PATH}"
    }

    tools {
        nodejs 'nodejs'
        allure 'allure'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                dir(env.WORKSPACE) { 
                    sh '''
                        echo "WORKSPACE=$(pwd)"
                        node -v
                        npm -v
                        npm ci 

                        echo "=== install BDD Gherkin dependencies ==="
                        npm install --save-dev @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor esbuild

                        npx cypress install
                        npx cypress verify

                        echo "=== check allure plugin ==="
                        npm ls @shelex/cypress-allure-plugin || true 
                        ls -la node_modules/@shelex/cypress-allure-plugin || true
                    '''
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Eksekusi JS dan TSX normal (tanpa BDD) tetap dipertahankan
                sh 'npx cypress run --headless'
                
                script {
                    if (isUnix()) {
                        sh 'npm run test:allure'
                    } else {
                        bat 'npm run test:allure'
                    }
                }
            }
        }

        // --- BAGIAN YANG DITAMBAHKAN UNTUK TYPESCRIPT & GHERKIN BDD ---
        stage('Run Cypress BDD Tests') {
            steps {
                script {
                    // Menjalankan secara spesifik file ekstensi .feature (Gherkin BDD)
                    // Pastikan Anda telah mengonfigurasi typescript dan cucumber-preprocessor di project Anda.
                    if (isUnix()) {
                        sh 'npx cypress run --spec "**/*.feature" --headless'
                    } else {
                        bat 'npx cypress run --spec "**/*.feature" --headless'
                    }
                }
            }
        }
        // --------------------------------------------------------------

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'cypress/videos/**/*.mp4, cypress/screenshots/**/*.png, allure-results/**/*', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            allure includeProperties: false, jdk: 'termurin21', results: [[path: 'allure-results']], testResults: '', source: '', report: 'allure-report'
            cleanWs()
        } // Penambahan kurung kurawal tutup yang sebelumnya kurang
        failure {
            echo 'Cypress test failed !'
        }
        success {
            echo 'cypress test passed !'
        }
    }
}