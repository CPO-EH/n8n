import nock from 'nock';

import { testWorkflows } from '@test/nodes/Helpers';

describe('Test DiscordV2, member => roleRemove', () => {
	nock('https://discord.com/api/v10')
		.persist()
		.delete(/\/guilds\/1168516062791340136\/members\/470936827994570762\/roles\/\d+/)
		.reply(200, { success: true });

	const workflows = ['nodes/Discord/test/v2/node/member/roleRemove.workflow.json'];
	testWorkflows(workflows);
});
