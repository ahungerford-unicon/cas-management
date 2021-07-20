/**
 * Data class passed to client that represents features enabled.
 */
export class AppConfig {
  mgmtType = 'DEFAULT';
  versionControl: boolean;
  delegatedMgmt: boolean;
  syncScript: boolean;
  contactLookup: boolean;
  oauthEnabled: boolean;
  samlEnabled: boolean;
  wsfedEnabled: boolean;
  attributeStoreEnabled: boolean;
  submissionsEnabled: boolean;
}
