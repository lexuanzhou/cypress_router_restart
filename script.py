import os

def main():
    try:
        os.system('npx cypress run --config-file ./cypress.json')
    except:
        print('Can not run cypress command')
    return

if __name__ == '__main__':
    main()