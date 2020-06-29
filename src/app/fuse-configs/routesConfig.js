import FuseUtils from '@fuse/utils';
import SendFilesConfig from 'app/main/2020-6-SENDFILES/SendFilesConfig';

const routeConfigs = [...SendFilesConfig];

const routes = [...FuseUtils.generateRoutesFromConfigs(routeConfigs)];

export default routes;
