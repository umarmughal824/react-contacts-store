const PROTECTED_ROUTE_PREFIX = "/dashboard/";

export const NAV_LINKS = {
  ROOT: { displayName: '', url: '/' },
  HOME: { displayName: 'Home', url: PROTECTED_ROUTE_PREFIX },
  LOGIN: { displayName: 'Login', url: '/login/' },
  SIGNUP: { displayName: 'Sign Up', url: '/signup/' },
  CONTACTS: { displayName: 'Contacts', url: `${PROTECTED_ROUTE_PREFIX}contacts/` },
  TODOS: { displayName: 'Todods Manager', url: `${PROTECTED_ROUTE_PREFIX}todos/` },
  ACCOUNT: { displayName: 'My Account', url: `${PROTECTED_ROUTE_PREFIX}account/` },
};
