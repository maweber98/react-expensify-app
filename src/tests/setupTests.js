import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

// DotEnv.config({ path: `${__dirname}./.env.test` });
DotEnv.config({ path: '.env.test' });

Enzyme.configure({
    adapter: new Adapter()
});