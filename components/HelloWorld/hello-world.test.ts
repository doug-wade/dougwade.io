import { mount } from '@tybalt/test-utils';
import HelloWorld from './hello-world.component';

describe('HelloWorld', () => {
    it('renders', async () => {
        const mockName = 'World';
        const wrapper = await mount(HelloWorld, { attributes: { name: mockName } });
        
        expect(wrapper.html()).toContain(`Hello ${mockName}`);
    });
});
