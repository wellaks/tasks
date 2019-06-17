import { createSelector } from 'reselect';

const selectWeather = () => ({ weather }) => weather;

export const selectCity = () =>
    createSelector(
        selectWeather(),
        ({ city }) => city,
    );

export const selectError = () =>
    createSelector(
        selectWeather(),
        ({ error }) => error,
    );

export const selectMain = () =>
    createSelector(
        selectWeather(),
        ({ main }) => main,
    );

export const selectLoadingStatus = () =>
    createSelector(
        selectWeather(),
        ({ isLoading }) => isLoading,
    );
