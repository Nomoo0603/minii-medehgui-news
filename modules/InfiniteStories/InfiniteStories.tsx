import { Category } from '@prezly/sdk';
import type { FunctionComponent } from 'react';
import { defineMessages, useIntl } from 'react-intl';

import { Button } from '@/components';
import { PaginationProps, StoryWithImage } from 'types';

import { useInfiniteStoriesLoading } from './lib';
import StoriesList from './StoriesList';

import styles from './InfiniteStories.module.scss';

type Props = {
    initialStories: StoryWithImage[];
    pagination: PaginationProps;
    category?: Category;
};

const messages = defineMessages({
    loading: {
        defaultMessage: 'Loading...',
    },
    actionLoadMore: {
        defaultMessage: 'Load more',
    },
});

const InfiniteStories: FunctionComponent<Props> = ({ initialStories, pagination, category }) => {
    const { formatMessage } = useIntl();

    const { canLoadMore, isLoading, loadMoreStories, stories } = useInfiniteStoriesLoading(
        initialStories,
        pagination,
        category,
    );

    return (
        <div className={styles.container}>
            <StoriesList stories={stories} isCategoryList={Boolean(category)} />

            {canLoadMore && (
                <Button
                    variation="secondary"
                    onClick={loadMoreStories}
                    isLoading={isLoading}
                    className={styles.loadMore}
                >
                    {formatMessage(isLoading ? messages.loading : messages.actionLoadMore)}
                </Button>
            )}
        </div>
    );
};

export default InfiniteStories;