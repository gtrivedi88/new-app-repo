module.exports = {
    extends: ['@commitlint/config-conventional'],
    helpUrl: 'https://cpaas.pages.redhat.com/documentation/developers/commit_message_format.html',
    rules: {
        'scope-empty': [2, 'never']
    },
    ignores: [
        (message) => message.startsWith('draft'),
        (message) => message.startsWith('Draft'),
        (message) => message.startsWith('WIP'),
        (message) => message.match(/Apply \d+ suggestion\(s\) to \d+ file\(s\)/),
        (message) => message.match(/Merge branch \S+ into \S+/)
    ]
};
