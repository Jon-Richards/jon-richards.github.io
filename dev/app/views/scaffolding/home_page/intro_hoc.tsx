import * as React from 'react';
import { Intro, IntroProps } from 'Views/presentational/intro';
import { connect } from 'react-redux';
import { Store } from 'Store/index';

type Tools = Store['portfolio']['tools'];
type MatchingMediaQueries = Store['browser']['matching_media_queries'];

type StateProps = Pick<IntroProps, 'skills' | 'subtitle' | 'theme' | 'title'>;

function mapToolsToSkills(tools: Tools): StateProps['skills'] {
  return tools.map(tool => ({
    displayLabel: tool.display_title,
    uuid: tool.uuid,
    isCore: tool.is_core,
  }));
}

function resolveIntroTheme(
  matchingMediaQueries: MatchingMediaQueries
): StateProps['theme'] {
  const queries = matchingMediaQueries.map(query => query.id);
  if (queries.includes('480')) {
    return 'PANEL';
  } else {
    return 'COPY';
  }
}

function mapStateToProps(state: Store): StateProps {
  return {
    title: (
      <>
        Jon
        <br />
        Richards
      </>
    ),
    subtitle: 'Front-end Engineer',
    skills: mapToolsToSkills(state.portfolio.tools),
    theme: resolveIntroTheme(state.browser.matching_media_queries),
  };
}

const memoizedIntro = React.memo<IntroProps>(Intro);

const INTRO_HOC = connect(mapStateToProps, () => ({}))(memoizedIntro);

export { INTRO_HOC as IntroHOC };
