import 'vitepress/dist/client/theme-default/styles/fonts.css';
import 'vitepress/dist/client/theme-default/styles/vars.css';
import 'vitepress/dist/client/theme-default/styles/base.css';
import 'vitepress/dist/client/theme-default/styles/utils.css';
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css';
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css';
// import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css';
import './styles/components/vp-doc.css';
import 'vitepress/dist/client/theme-default/styles/components/vp-sponsor.css';
import Layout from 'vitepress/dist/client/theme-default/Layout.vue';
import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue';
export { default as VPHomeHero } from 'vitepress/dist/client/theme-default/components/VPHomeHero.vue';
export { default as VPHomeFeatures } from 'vitepress/dist/client/theme-default/components/VPHomeFeatures.vue';
export { default as VPHomeSponsors } from 'vitepress/dist/client/theme-default/components/VPHomeSponsors.vue';
export { default as VPDocAsideSponsors } from 'vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue';
export { default as VPTeamPage } from 'vitepress/dist/client/theme-default/components/VPTeamPage.vue';
export { default as VPTeamPageTitle } from 'vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue';
export { default as VPTeamPageSection } from 'vitepress/dist/client/theme-default/components/VPTeamPageSection.vue';
export { default as VPTeamMembers } from 'vitepress/dist/client/theme-default/components/VPTeamMembers.vue';
const theme = {
    Layout,
    NotFound
};
export default theme;
