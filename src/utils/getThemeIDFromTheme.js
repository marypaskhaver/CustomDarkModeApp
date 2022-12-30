import DARK_MODE_OVERRIDE_OPTIONS from '../constants/darkModeOverrideOptions';

const getThemeIDFromTheme = theme => {
  const themeDescriptions = Object.values(DARK_MODE_OVERRIDE_OPTIONS);
  const targetDescription = themeDescriptions.find(
    description => description.theme === theme,
  );

  return targetDescription.id;
};

export default getThemeIDFromTheme;
