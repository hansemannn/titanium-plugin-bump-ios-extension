const fs = require('fs');
const path = require('path');
const plist = require('plist');

/**
 * Rewrite native iOS extension plist if app version changes.
 * 
 * @param _logger The logger instance.
 * @param _config The config instance.
 * @param cli The CLI instance.
 * @param appc The Appc-CLI instance.
 */
exports.init = function (_logger, _config, cli, appc) {
	const extensionsDirectoryPath = path.resolve('./extensions');
	const extensionsDirectory = fs.readdirSync(extensionsDirectoryPath, 'utf-8');

	for (const extensionDirectory of extensionsDirectory) {
		if(/^\..*/.test(extensionDirectory)) continue;

		const plistPath = path.join(extensionsDirectoryPath, extensionDirectory, extensionDirectory, 'Info.plist');

		const version = cli.tiapp.version;
		const shortVersion = appc.version.format(cli.tiapp.version, 0, 3);
		const contents = plist.parse(fs.readFileSync(plistPath, 'utf8'));
	
		contents['CFBundleShortVersionString'] = shortVersion;
		contents['CFBundleVersion'] = version;
	
		fs.writeFileSync(plistPath, plist.build(contents));
	}
};