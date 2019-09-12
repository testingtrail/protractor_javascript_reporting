1. Make sure you installed node.js and npm
2. Make sure npm is in path environment variables in system Windows
3. Make sure you installed protractor
    - npm install -g protractor
4. Install webdriver manager
    - npm i webdriver-manager@latest
    - Run this command: webdriver-manager update to create browser in global protractor installation
5. Run 'protractor where' and copy conf.js in conf folder
    - C:\Users\<user>\AppData\Roaming\npm\node_modules\protractor\example
    - if you have ‘directConnect: true’ yo DO NOT need to run webdriver-manager start
6. Run 'protractor where' and copy example_spec.js in tests folder or create your own as the one calles 'calculator.js'
    - C:\Users\<user>\AppData\Roaming\npm\node_modules\protractor\example
7. Run it in cmd
    - protractor conf.js (remember to point to the file you want to run)