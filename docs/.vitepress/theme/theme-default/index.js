import 'vitepress/client/theme-default/styles/fonts.css';
import 'vitepress/client/theme-default/styles/vars.css';
import 'vitepress/client/theme-default/styles/base.css';
import 'vitepress/client/theme-default/styles/utils.css';
import 'vitepress/client/theme-default/styles/components/custom-block.css';
import 'vitepress/client/theme-default/styles/components/vp-code.css';
// import 'vitepress/client/theme-default/styles/components/vp-doc.css';
import './styles/components/vp-doc.css';
import 'vitepress/client/theme-default/styles/components/vp-sponsor.css';
import Layout from 'vitepress/client/theme-default/Layout.vue';
import NotFound from 'vitepress/client/theme-default/NotFound.vue';
export { default as VPHomeHero } from 'vitepress/client/theme-default/components/VPHomeHero.vue';
export { default as VPHomeFeatures } from 'vitepress/client/theme-default/components/VPHomeFeatures.vue';
export { default as VPHomeSponsors } from 'vitepress/client/theme-default/components/VPHomeSponsors.vue';
export { default as VPDocAsideSponsors } from 'vitepress/client/theme-default/components/VPDocAsideSponsors.vue';
export { default as VPTeamPage } from 'vitepress/client/theme-default/components/VPTeamPage.vue';
export { default as VPTeamPageTitle } from 'vitepress/client/theme-default/components/VPTeamPageTitle.vue';
export { default as VPTeamPageSection } from 'vitepress/client/theme-default/components/VPTeamPageSection.vue';
export { default as VPTeamMembers } from 'vitepress/client/theme-default/components/VPTeamMembers.vue';
const theme = {
    Layout,
    NotFound
};
export default theme;
