"""Generated message classes for replicapoolupdater version v1beta1.

The Google Compute Engine Instance Group Updater API provides services for
updating groups of Compute Engine Instances.
"""

from protorpc import messages


package = 'replicapoolupdater'


class InsertResponse(messages.Message):
  """Response returned by Insert method.

  Fields:
    update: The id of the update.
  """

  update = messages.StringField(1)


class InstanceUpdate(messages.Message):
  """Update of a single instance.

  Fields:
    instance: URL of the instance being updated.
    status: Status of the instance update. Possible values are:   -
      "PENDING/code>": The instance update is pending execution.  -
      "ROLLING_FORWARD": The instance update is going forward.  -
      "ROLLING_BACK": The instance update is being rolled back.  - "PAUSED":
      The instance update is temporarily paused (inactive).  - "ROLLED_OUT":
      The instance update is finished, the instance is running the new
      template.  - "ROLLED_BACK": The instance update is finished, the
      instance has been reverted to the previous template.  - "CANCELLED": The
      instance update is paused and no longer can be resumed, undefined in
      which template the instance is running.
  """

  instance = messages.StringField(1)
  status = messages.StringField(2)


class InstanceUpdateList(messages.Message):
  """Response returned by ListInstanceUpdates method.

  Fields:
    items: A list of instance updates.
    kind: [Output Only] Type of the resource.
    nextPageToken: A token used to continue a truncated list request (output
      only).
    selfLink: [Output Only] The fully qualified URL for the resource.
  """

  items = messages.MessageField('InstanceUpdate', 1, repeated=True)
  kind = messages.StringField(2, default=u'replicapoolupdater#instanceUpdateList')
  nextPageToken = messages.StringField(3)
  selfLink = messages.StringField(4)


class ReplicapoolupdaterUpdatesCancelRequest(messages.Message):
  """A ReplicapoolupdaterUpdatesCancelRequest object.

  Fields:
    instanceGroupManager: The name of the instance group manager.
    project: The Google Developers Console project name.
    update: The id of the update.
    zone: The name of the zone in which the update's target resides.
  """

  instanceGroupManager = messages.StringField(1, required=True)
  project = messages.StringField(2, required=True)
  update = messages.StringField(3, required=True)
  zone = messages.StringField(4, required=True)


class ReplicapoolupdaterUpdatesCancelResponse(messages.Message):
  """An empty ReplicapoolupdaterUpdatesCancel response."""


class ReplicapoolupdaterUpdatesGetRequest(messages.Message):
  """A ReplicapoolupdaterUpdatesGetRequest object.

  Fields:
    instanceGroupManager: The name of the instance group manager.
    project: The Google Developers Console project name.
    update: The id of the update.
    zone: The name of the zone in which the update's target resides.
  """

  instanceGroupManager = messages.StringField(1, required=True)
  project = messages.StringField(2, required=True)
  update = messages.StringField(3, required=True)
  zone = messages.StringField(4, required=True)


class ReplicapoolupdaterUpdatesInsertRequest(messages.Message):
  """A ReplicapoolupdaterUpdatesInsertRequest object.

  Fields:
    instanceGroupManager: The name of the instance group manager.
    project: The Google Developers Console project name.
    update: A Update resource to be passed as the request body.
    zone: The name of the zone in which the update's target resides.
  """

  instanceGroupManager = messages.StringField(1, required=True)
  project = messages.StringField(2, required=True)
  update = messages.MessageField('Update', 3)
  zone = messages.StringField(4, required=True)


class ReplicapoolupdaterUpdatesListInstanceUpdatesRequest(messages.Message):
  """A ReplicapoolupdaterUpdatesListInstanceUpdatesRequest object.

  Fields:
    instanceGroupManager: The name of the instance group manager.
    maxResults: Maximum count of results to be returned. Acceptable values are
      1 to 100, inclusive. (Default: 50)
    pageToken: Set this to the nextPageToken value returned by a previous list
      request to obtain the next page of results from the previous list
      request.
    project: The Google Developers Console project name.
    update: The id of the update.
    zone: The name of the zone in which the update's target resides.
  """

  instanceGroupManager = messages.StringField(1, required=True)
  maxResults = messages.IntegerField(2, variant=messages.Variant.INT32, default=50)
  pageToken = messages.StringField(3)
  project = messages.StringField(4, required=True)
  update = messages.StringField(5, required=True)
  zone = messages.StringField(6, required=True)


class ReplicapoolupdaterUpdatesListRequest(messages.Message):
  """A ReplicapoolupdaterUpdatesListRequest object.

  Fields:
    instanceGroupManager: The name of the instance group manager.
    maxResults: Maximum count of results to be returned. Acceptable values are
      1 to 100, inclusive. (Default: 50)
    pageToken: Set this to the nextPageToken value returned by a previous list
      request to obtain the next page of results from the previous list
      request.
    project: The Google Developers Console project name.
    zone: The name of the zone in which the update's target resides.
  """

  instanceGroupManager = messages.StringField(1, required=True)
  maxResults = messages.IntegerField(2, variant=messages.Variant.INT32, default=50)
  pageToken = messages.StringField(3)
  project = messages.StringField(4, required=True)
  zone = messages.StringField(5, required=True)


class ReplicapoolupdaterUpdatesPauseRequest(messages.Message):
  """A ReplicapoolupdaterUpdatesPauseRequest object.

  Fields:
    instanceGroupManager: The name of the instance group manager.
    project: The Google Developers Console project name.
    update: The id of the update.
    zone: The name of the zone in which the update's target resides.
  """

  instanceGroupManager = messages.StringField(1, required=True)
  project = messages.StringField(2, required=True)
  update = messages.StringField(3, required=True)
  zone = messages.StringField(4, required=True)


class ReplicapoolupdaterUpdatesPauseResponse(messages.Message):
  """An empty ReplicapoolupdaterUpdatesPause response."""


class ReplicapoolupdaterUpdatesResumeRequest(messages.Message):
  """A ReplicapoolupdaterUpdatesResumeRequest object.

  Fields:
    instanceGroupManager: The name of the instance group manager.
    project: The Google Developers Console project name.
    update: The id of the update.
    zone: The name of the zone in which the update's target resides.
  """

  instanceGroupManager = messages.StringField(1, required=True)
  project = messages.StringField(2, required=True)
  update = messages.StringField(3, required=True)
  zone = messages.StringField(4, required=True)


class ReplicapoolupdaterUpdatesResumeResponse(messages.Message):
  """An empty ReplicapoolupdaterUpdatesResume response."""


class ReplicapoolupdaterUpdatesRollbackRequest(messages.Message):
  """A ReplicapoolupdaterUpdatesRollbackRequest object.

  Fields:
    instanceGroupManager: The name of the instance group manager.
    project: The Google Developers Console project name.
    update: The id of the update.
    zone: The name of the zone in which the update's target resides.
  """

  instanceGroupManager = messages.StringField(1, required=True)
  project = messages.StringField(2, required=True)
  update = messages.StringField(3, required=True)
  zone = messages.StringField(4, required=True)


class ReplicapoolupdaterUpdatesRollbackResponse(messages.Message):
  """An empty ReplicapoolupdaterUpdatesRollback response."""


class ReplicapoolupdaterUpdatesRollforwardRequest(messages.Message):
  """A ReplicapoolupdaterUpdatesRollforwardRequest object.

  Fields:
    instanceGroupManager: The name of the instance group manager.
    project: The Google Developers Console project name.
    update: The id of the update.
    zone: The name of the zone in which the update's target resides.
  """

  instanceGroupManager = messages.StringField(1, required=True)
  project = messages.StringField(2, required=True)
  update = messages.StringField(3, required=True)
  zone = messages.StringField(4, required=True)


class ReplicapoolupdaterUpdatesRollforwardResponse(messages.Message):
  """An empty ReplicapoolupdaterUpdatesRollforward response."""


class StandardQueryParameters(messages.Message):
  """Query parameters accepted by all methods.

  Enums:
    AltValueValuesEnum: Data format for the response.

  Fields:
    alt: Data format for the response.
    fields: Selector specifying which fields to include in a partial response.
    key: API key. Your API key identifies your project and provides you with
      API access, quota, and reports. Required unless you provide an OAuth 2.0
      token.
    oauth_token: OAuth 2.0 token for the current user.
    prettyPrint: Returns response with indentations and line breaks.
    quotaUser: Available to use for quota purposes for server-side
      applications. Can be any arbitrary string assigned to a user, but should
      not exceed 40 characters. Overrides userIp if both are provided.
    trace: A tracing token of the form "token:<tokenid>" or "email:<ldap>" to
      include in api requests.
    userIp: IP address of the site where the request originates. Use this if
      you want to enforce per-user limits.
  """

  class AltValueValuesEnum(messages.Enum):
    """Data format for the response.

    Values:
      json: Responses with Content-Type of application/json
    """
    json = 0

  alt = messages.EnumField('AltValueValuesEnum', 1, default=u'json')
  fields = messages.StringField(2)
  key = messages.StringField(3)
  oauth_token = messages.StringField(4)
  prettyPrint = messages.BooleanField(5, default=True)
  quotaUser = messages.StringField(6)
  trace = messages.StringField(7)
  userIp = messages.StringField(8)


class Update(messages.Message):
  """Resource describing a single update (rollout) of a group of instances to
  the given template.

  Fields:
    creationTimestamp: [Output Only] Creation timestamp in RFC3339 text
      format.
    id: [Output Only] Unique identifier for the resource; defined by the
      server.
    instanceGroupManager: URL of an instance group manager being updated.
    instanceTemplate: URL of an instance template to be applied.
    kind: [Output Only] Type of the resource.
    policy: Parameters of the update process.
    progress: [Output Only] An optional progress indicator that ranges from 0
      to 100. There is no requirement that this be linear or support any
      granularity of operations. This should not be used to guess at when the
      update will be complete. This number should be monotonically increasing
      as the update progresses.
    selfLink: [Output Only] The fully qualified URL for the resource.
    status: [Output Only] Status of the update. Possible values are:   -
      "ROLLING_FORWARD": The update is going forward.  - "ROLLING_BACK": The
      update is being rolled back.  - "PAUSED": The update is temporarily
      paused (inactive).  - "ROLLED_OUT": The update is finished, all
      instances have been updated successfully.  - "ROLLED_BACK": The update
      is finished, all instances have been reverted to the previous template.
      - "CANCELLED": The update is paused and no longer can be resumed,
      undefined how many instances are running in which template.
    statusMessage: [Output Only] An optional textual description of the
      current status of the update.
    user: [Output Only] User who requested the update, for example:
      user@example.com.
  """

  creationTimestamp = messages.StringField(1)
  id = messages.StringField(2)
  instanceGroupManager = messages.StringField(3)
  instanceTemplate = messages.StringField(4)
  kind = messages.StringField(5, default=u'replicapoolupdater#update')
  policy = messages.MessageField('UpdatePolicy', 6)
  progress = messages.IntegerField(7, variant=messages.Variant.INT32)
  selfLink = messages.StringField(8)
  status = messages.StringField(9)
  statusMessage = messages.StringField(10)
  user = messages.StringField(11)


class UpdateList(messages.Message):
  """Response returned by List method.

  Fields:
    items: A list of update resources.
    kind: [Output Only] Type of the resource.
    nextPageToken: A token used to continue a truncated list request (output
      only).
    selfLink: [Output Only] The fully qualified URL for the resource.
  """

  items = messages.MessageField('Update', 1, repeated=True)
  kind = messages.StringField(2, default=u'replicapoolupdater#updateList')
  nextPageToken = messages.StringField(3)
  selfLink = messages.StringField(4)


class UpdatePolicy(messages.Message):
  """Parameters of an update process.

  Fields:
    canary: Parameters of a canary phase. If absent, canary will NOT be
      performed.
    maxNumConcurrentInstances: Maximum number of instances that can be updated
      simultaneously (concurrently). An update of an instance starts when the
      instance is about to be restarted and finishes after the instance has
      been restarted and the sleep period (defined by
      sleep_after_instance_restart_sec) has passed.
    sleepAfterInstanceRestartSec: Time period after the instance has been
      restarted but before marking the update of this instance as done.
  """

  canary = messages.MessageField('UpdatePolicyCanary', 1)
  maxNumConcurrentInstances = messages.IntegerField(2, variant=messages.Variant.INT32)
  sleepAfterInstanceRestartSec = messages.IntegerField(3, variant=messages.Variant.INT32)


class UpdatePolicyCanary(messages.Message):
  """Parameters of a canary phase.

  Fields:
    numInstances: Number of instances updated as a part of canary phase. If
      absent, the default number of instances will be used.
  """

  numInstances = messages.IntegerField(1, variant=messages.Variant.INT32)


