import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

export default function useI18n() {
	const { asPath, locale, pathname, replace, query } = useRouter();

	const {
		i18n: { dir: _dir, language },
		ready,
	} = useTranslation();

	useEffect(() => {
		if (ready) {
			replace({ pathname, query }, asPath, { locale: language });
			if (language) {
				document.dir = _dir(language);
			}
		}
	}, [language]);
	return language;
}
