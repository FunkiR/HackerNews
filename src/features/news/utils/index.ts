import i18n from '~/locales';

/**
 * Возвращает текстовое представление времени по временной метке
 * @param {number} time - временная метка в секундах
 * @returns {string}
 */
const getFormattedDate = (time: number): string => new Date(time * 1000).toLocaleString(i18n.language);

export {getFormattedDate};
