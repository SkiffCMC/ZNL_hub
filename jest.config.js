module.exports = {
  modulePaths: ['src/components'],
  testMatch: [
    // app

    // '<rootDir>/app/src/menu.test.js',
    // '<rootDir>/app/src/modules/updateModal.test.js',
    '<rootDir>/app/src/modules/autoUpdater.test.js',
    // '<rootDir>/app/src/modules/win.test.js',
    // '<rootDir>/app/src/modules/localeHandler.test.js',

    // src

    // '<rootDir>/src/utils/localJSONStorage.test.js',
    // '<rootDir>/src/utils/ipcLocale.test.js',
    // '<rootDir>/src/utils/passphrase.test.js',
    // '<rootDir>/src/utils/notification.test.js',
    // '<rootDir>/src/utils/delegates.test.js',
    // '<rootDir>/src/utils/account.test.js',
    // '<rootDir>/src/utils/isMobile.test.js',
    // '<rootDir>/src/utils/followedAccounts.test.js',
    // '<rootDir>/src/utils/polyfills.test.js',
    // '<rootDir>/src/utils/lsk.test.js',
    // '<rootDir>/src/utils/externalLinks.test.js',
    // '<rootDir>/src/utils/app.test.js',
    // '<rootDir>/src/utils/similarWord.test.js',
    // '<rootDir>/src/utils/api/search.test.js',
    // '<rootDir>/src/utils/api/account.test.js',
    // '<rootDir>/src/utils/api/transactions.test.js',
    // '<rootDir>/src/utils/api/peers.test.js',
    // '<rootDir>/src/utils/api/nethash.test.js',
    // '<rootDir>/src/utils/api/delegate.test.js',
    // '<rootDir>/src/utils/generateUniqueId.test.js',
    // '<rootDir>/src/utils/login.test.js',
    // '<rootDir>/src/components/searchBar/index.test.js',
    // '<rootDir>/src/components/accountTransactions/index.test.js',
    // '<rootDir>/src/components/multiStep/index.test.js',
    // '<rootDir>/src/components/multiStep/multiStepNav.test.js',
    // '<rootDir>/src/components/fontIcon/index.test.js',
    // '<rootDir>/src/components/toaster/toaster.test.js',
    // '<rootDir>/src/components/toaster/index.test.js',
    // '<rootDir>/src/components/votesPreview/votesPreview.test.js',
    // '<rootDir>/src/components/accountVisual/index.test.js',
    // '<rootDir>/src/components/sendReadable/index.test.js',
    // '<rootDir>/src/components/sendReadable/send.test.js',
    // '<rootDir>/src/components/savedAccounts/savedAccounts.test.js',
    // '<rootDir>/src/components/savedAccounts/accountCard.test.js',
    // '<rootDir>/src/components/savedAccounts/index.test.js',
    // '<rootDir>/src/components/box/index.test.js',
    // '<rootDir>/src/components/app/index.test.js',
    // '<rootDir>/src/components/secondPassphrase/index.test.js',
    // '<rootDir>/src/components/secondPassphrase/secondPassphrase.test.js',
    // '<rootDir>/src/components/errorBoundary/index.test.js',
    // '<rootDir>/src/components/menuBar/menuBar.test.js',
    // '<rootDir>/src/components/referenceInput/index.test.js',
    // '<rootDir>/src/components/converter/converter.test.js',
    // '<rootDir>/src/components/converter/index.test.js',
    // '<rootDir>/src/components/notFound/index.test.js',
    // '<rootDir>/src/components/authenticate/authenticate.test.js',
    // '<rootDir>/src/components/authenticate/index.test.js',
    // '<rootDir>/src/components/autoSuggest/index.test.js',
    // '<rootDir>/src/components/followedAccounts/addAccountTitle.test.js',
    // '<rootDir>/src/components/followedAccounts/viewAccounts.test.js',
    // '<rootDir>/src/components/followedAccounts/addAccountID.test.js',
    // '<rootDir>/src/components/voting/voting.test.js',
    // '<rootDir>/src/components/voting/index.test.js',
    // '<rootDir>/src/components/customRoute/index.test.js',
    // '<rootDir>/src/components/passphrase/ConfirmSecond/index.test.js',
    // '<rootDir>/src/components/passphrase/ConfirmSecond/confirmSecond.test.js',
    // '<rootDir>/src/components/passphrase/safekeeping/index.test.js',
    // '<rootDir>/src/components/passphrase/confirm/index.test.js',
    // '<rootDir>/src/components/passphrase/confirm/form.test.js',
    // '<rootDir>/src/components/passphrase/info/index.test.js',
    // '<rootDir>/src/components/passphrase/createSecond/create.test.js',
    // '<rootDir>/src/components/passphrase/create/movableShape.test.js',
    // '<rootDir>/src/components/passphrase/create/create.test.js',
    // '<rootDir>/src/components/sendTo/followAccount.test.js',
    // '<rootDir>/src/components/sendTo/sendTo.test.js',
    // '<rootDir>/src/components/sidechains/index.test.js',
    // '<rootDir>/src/components/spinner/index.test.js',
    // '<rootDir>/src/components/parallax/index.test.js',
    // '<rootDir>/src/components/quickTips/index.test.js',
    // '<rootDir>/src/components/confirmVotes/confirmVotes.test.js',
    // '<rootDir>/src/components/confirmVotes/index.test.js',
    // '<rootDir>/src/components/passphraseInput/index.test.js',
    // '<rootDir>/src/components/search/keyAction.test.js',
    // '<rootDir>/src/components/search/searchResult.test.js',
    // '<rootDir>/src/components/dialog/options.test.js',
    // '<rootDir>/src/components/dialog/alert.test.js',
    // '<rootDir>/src/components/dialog/dialog.test.js',
    // '<rootDir>/src/components/dashboard/currencyGraph.test.js',
    // '<rootDir>/src/components/liskAmount/index.test.js',
    // '<rootDir>/src/components/registerDelegate/index.test.js',
    // '<rootDir>/src/components/registerDelegate/steps/choose/choose.test.js',
    // '<rootDir>/src/components/registerDelegate/steps/confirm/confirm.test.js',
    // '<rootDir>/src/components/registerDelegate/registerDelegate.test.js',
    '<rootDir>/src/components/transactions/amount.test.js',
    '<rootDir>/src/components/transactions/transactionRow.test.js',
    '<rootDir>/src/components/transactions/transactionType.test.js',
    '<rootDir>/src/components/transactions/explorerTransactions/index.test.js',
    '<rootDir>/src/components/transactions/transactionList.test.js',
    '<rootDir>/src/components/transactions/transactionOverview.test.js',
    '<rootDir>/src/components/transactions/transactionsHeader.test.js',
    '<rootDir>/src/components/transactions/walletTransactions/index.test.js',
    '<rootDir>/src/components/transactions/transactionDetailView.test.js',
    '<rootDir>/src/components/transactions/delegateStatistics.test.js',
    '<rootDir>/src/components/transactions/status.test.js',
    // '<rootDir>/src/components/register/index.test.js',
    // '<rootDir>/src/components/register/register.test.js',
    // '<rootDir>/src/components/pricedButton/index.test.js',
    // '<rootDir>/src/components/copyToClipboard/index.test.js',
    // '<rootDir>/src/components/loadingBar/index.test.js',
    // '<rootDir>/src/components/loadingBar/loadingBar.test.js',
    // '<rootDir>/src/components/toolbox/buttons/button.test.js',
    // '<rootDir>/src/components/toolbox/buttons/iconButton.test.js',
    // '<rootDir>/src/components/toolbox/sliderCheckbox/index.test.js',
    // '<rootDir>/src/components/toolbox/transitionWrapper/index.test.js',
    // '<rootDir>/src/components/request/specifyRequest.test.js',
    // '<rootDir>/src/components/request/confirmRequest.test.js',
    // '<rootDir>/src/components/sendWritable/index.test.js',
    // '<rootDir>/src/components/sendWritable/send.test.js',
    // '<rootDir>/src/components/actionBar/index.test.js',
    // '<rootDir>/src/components/mainMenu/mainMenu.test.js',
    // '<rootDir>/src/components/mainMenu/index.test.js',
    // '<rootDir>/src/components/resultBox/resultBox.test.js',
    // '<rootDir>/src/components/proxyDialog/index.test.js',
    // '<rootDir>/src/components/passphraseCreation/index.test.js',
    // '<rootDir>/src/components/authInputs/authInputs.test.js',
    // '<rootDir>/src/components/authInputs/index.test.js',
    // '<rootDir>/src/components/account/account.test.js',
    // '<rootDir>/src/components/account/index.test.js',
    // '<rootDir>/src/components/setting/index.test.js',
    // '<rootDir>/src/components/setting/setting.test.js',
    // '<rootDir>/src/components/timestamp/index.test.js',
    // '<rootDir>/src/components/send/index.test.js',
    // '<rootDir>/src/components/votingListView/voteRow.test.js',
    // '<rootDir>/src/components/votingListView/delegateRow.test.js',
    // '<rootDir>/src/components/votingListView/votingListView.test.js',
    // '<rootDir>/src/components/votingListView/delegateList.test.js',
    // '<rootDir>/src/components/votingListView/index.test.js',
    // '<rootDir>/src/components/votingListView/voteCheckbox.test.js',
    // '<rootDir>/src/components/votingListView/votingHeader.test.js',
    // '<rootDir>/src/components/offlineWrapper/index.test.js',
    // '<rootDir>/src/components/formattedNumber/index.test.js',
    // '<rootDir>/src/components/voteUrlProcessor/index.test.js',
    // '<rootDir>/src/components/voteUrlProcessor/voteUrlProcessor.test.js',
    // '<rootDir>/src/components/login/index.test.js',
    // '<rootDir>/src/components/login/login.test.js',
    // '<rootDir>/src/components/header/countDownTemplate.test.js',
    // '<rootDir>/src/components/header/index.test.js',
    // '<rootDir>/src/components/header/customCountDown.test.js',
    // '<rootDir>/src/components/header/header.test.js',
    // '<rootDir>/src/components/signMessage/signMessage.test.js',
    // '<rootDir>/src/components/onboarding/onboarding.test.js',
    // '<rootDir>/src/components/privateWrapper/index.test.js',
    // '<rootDir>/src/components/help/help.test.js',
    // '<rootDir>/src/components/newsFeed/index.test.js',
    // '<rootDir>/src/components/newsFeed/newsFeed.test.js',
    // '<rootDir>/src/components/newsFeed/settingsNewsFeed.test.js',
    // '<rootDir>/src/actions/search.test.js',
    // '<rootDir>/src/actions/savedAccounts.test.js',
    // '<rootDir>/src/actions/toaster.test.js',
    // '<rootDir>/src/actions/dialog.test.js',
    // '<rootDir>/src/actions/voting.test.js',
    // '<rootDir>/src/actions/account.test.js',
    // '<rootDir>/src/actions/loding.test.js',
    // '<rootDir>/src/actions/followedAccounts.test.js',
    // '<rootDir>/src/actions/transactions.test.js',
    // '<rootDir>/src/actions/peers.test.js',
    // '<rootDir>/src/actions/delegate.test.js',
    // '<rootDir>/src/actions/setting.test.js',
    // '<rootDir>/src/store/middlewares/savedAccounts.test.js',
    // '<rootDir>/src/store/middlewares/socket.test.js',
    // '<rootDir>/src/store/middlewares/savedSettings.test.js',
    // '<rootDir>/src/store/middlewares/offline.test.js',
    // '<rootDir>/src/store/middlewares/notification.test.js',
    // '<rootDir>/src/store/middlewares/voting.test.js',
    // '<rootDir>/src/store/middlewares/account.test.js',
    // '<rootDir>/src/store/middlewares/followedAccounts.test.js',
    // '<rootDir>/src/store/middlewares/peers.test.js',
    // '<rootDir>/src/store/middlewares/loadingBar.test.js',
    // '<rootDir>/src/store/middlewares/login.test.js',
    // '<rootDir>/src/store/subscribers/savedAccounts.test.js',
    // '<rootDir>/src/store/subscribers/followedAccounts.test.js',
    // '<rootDir>/src/store/reducers/search.test.js',
    // '<rootDir>/src/store/reducers/savedAccounts.test.js',
    // '<rootDir>/src/store/reducers/dialog.test.js',
    // '<rootDir>/src/store/reducers/voting.test.js',
    // '<rootDir>/src/store/reducers/account.test.js',
    // '<rootDir>/src/store/reducers/loding.test.js',
    // '<rootDir>/src/store/reducers/followedAccounts.test.js',
    // '<rootDir>/src/store/reducers/transactions.test.js',
    // '<rootDir>/src/store/reducers/peers.test.js',
    // '<rootDir>/src/store/reducers/toater.test.js',
    // '<rootDir>/src/store/reducers/settings.test.js',
    // '<rootDir>/src/store/reducers/delegate.test.js',
    // '<rootDir>/src/store/reducers/transaction.test.js',

    // integration

    '<rootDir>/test/integration/dashboard.test.js',
    '<rootDir>/test/integration/transactionID.test.js',
    // '<rootDir>/test/integration/wallet.test.js',
    // '<rootDir>/test/integration/voting.test.js',
    // '<rootDir>/test/integration/accountTransactions.test.js',
    '<rootDir>/test/integration/registerDelegate.test.js',
    // '<rootDir>/test/integration/register.test.js',
    '<rootDir>/test/integration/login.test.js',
  ],
  verbose: true,
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/jest',
  collectCoverageFrom: [
    'src/**/*.js',
    'app/src/**/*.js',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  coverageThreshold: {
    global: {
      branches: 79,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  setupFiles: [
    '<rootDir>/config/setupJest.js',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testURL: 'http://localhost',
  globals: {
    PRODUCTION: true,
    TEST: true,
  },
};
